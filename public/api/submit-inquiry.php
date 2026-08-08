<?php
declare(strict_types=1);

/**
 * EVAPFit inquiry handler.
 *
 * Records are appended to data/inquiries/YYYY-MM.ndjson. The previous
 * inquiries.json file, when present, is intentionally left untouched.
 */

const MAX_FIELD_LENGTHS = [
    'product_name' => 300,
    'category' => 100,
    'quantity' => 100,
    'target_price' => 100,
    'specifications' => 10000,
    'name' => 200,
    'company' => 300,
    'email' => 320,
    'phone' => 100,
    'destination' => 300,
    'notes' => 10000,
    'inquiry_basket' => 20000,
];

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Method not allowed');
}

$dataDir = getenv('EVAPFIT_DATA_DIR') ?: __DIR__ . '/../../data';
$notifyEmail = getenv('EVAPFIT_NOTIFY_EMAIL') ?: 'rfq@aircoolerparts.com';

if (!ensureDirectory($dataDir) || !ensureDirectory($dataDir . '/inquiries')) {
    error_log('EVAPFit: inquiry data directory is unavailable');
    fail(503, 'The inquiry service is temporarily unavailable. Please try again.');
}

// Honeypot: return a fake success without storing or sending anything.
if (!empty($_POST['website'])) {
    redirectSuccess();
}

$token = stringField('form_token', 100);
if ($token !== '') {
    $loadTime = intval(substr($token, 0, 8), 36);
    $elapsed = (int) (microtime(true) * 1000) - $loadTime;
    if ($elapsed < 3000) {
        fail(400, 'Please review your inquiry before submitting.');
    }
}

$challenge = stringField('challenge', 20);
$challengeValue = (int) $challenge;
if ($challenge === '' || $challengeValue < 4 || $challengeValue > 18) {
    fail(400, 'Verification failed. Please refresh and try again.');
}

$inquiry = [];
foreach (MAX_FIELD_LENGTHS as $field => $maxLength) {
    $inquiry[$field] = stringField($field, $maxLength);
}

if ($inquiry['name'] === '') {
    fail(400, 'Please provide your name.');
}
if (!filter_var($inquiry['email'], FILTER_VALIDATE_EMAIL)) {
    fail(400, 'Please provide a valid email address.');
}

$linkCount = preg_match_all('/https?:\/\//i', $inquiry['specifications'] . ' ' . $inquiry['notes']);
if ($linkCount >= 4) {
    fail(400, 'Please remove excessive links before submitting.');
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
enforceRateLimit($dataDir . '/ratelimit.json', $ip);

$inquiry = array_merge([
    'schema_version' => 2,
    'id' => 'inq_' . bin2hex(random_bytes(8)),
    'timestamp' => gmdate('c'),
    'ip' => $ip,
], $inquiry);

$monthlyFile = $dataDir . '/inquiries/' . gmdate('Y-m') . '.ndjson';
appendRecord($monthlyFile, $inquiry);

$sanitizeHeader = static fn(string $value): string => str_replace(["\r", "\n", "\0"], '', $value);
$display = $sanitizeHeader($inquiry['company'] ?: $inquiry['name']);
$subject = 'New Inquiry: ' . $display . ' — EVAPFit';
$headers = [
    'From: EVAPFit Inquiry <rfq@aircoolerparts.com>',
    'Reply-To: ' . $inquiry['email'],
    'Content-Type: text/plain; charset=UTF-8',
];

if (!@mail($notifyEmail, $subject, buildEmailBody($inquiry), implode("\r\n", $headers))) {
    // The durable record is the source of truth. Monitoring should alert on this log.
    error_log('EVAPFit: mail notification failed for ' . $inquiry['id']);
}

redirectSuccess();

function stringField(string $name, int $maxLength): string
{
    $value = $_POST[$name] ?? '';
    if (!is_string($value)) {
        fail(400, 'Invalid form data.');
    }
    $value = trim(str_replace("\0", '', $value));
    $length = function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
    if ($length > $maxLength) {
        fail(400, 'One or more fields are too long.');
    }
    return $value;
}

function ensureDirectory(string $directory): bool
{
    return is_dir($directory) ? is_writable($directory) : @mkdir($directory, 0750, true);
}

function enforceRateLimit(string $file, string $ip): void
{
    $handle = @fopen($file, 'c+');
    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) fclose($handle);
        fail(503, 'Server busy. Please try again.');
    }

    $raw = stream_get_contents($handle);
    $data = json_decode($raw ?: '{}', true);
    if (!is_array($data)) $data = [];

    $now = time();
    foreach ($data as $key => $entry) {
        $day = is_array($entry['day'] ?? null) ? $entry['day'] : [];
        $day = array_values(array_filter($day, static fn($time): bool => is_int($time) && $time > $now - 86400));
        if ($day === []) {
            unset($data[$key]);
            continue;
        }
        $data[$key] = [
            'hour' => array_values(array_filter($day, static fn($time): bool => $time > $now - 3600)),
            'day' => $day,
        ];
    }

    $entry = $data[$ip] ?? ['hour' => [], 'day' => []];
    if (count($entry['hour']) >= 5 || count($entry['day']) >= 20) {
        flock($handle, LOCK_UN);
        fclose($handle);
        fail(429, 'Submission limit reached. Please try again later.');
    }

    $entry['hour'][] = $now;
    $entry['day'][] = $now;
    $data[$ip] = $entry;
    rewind($handle);
    ftruncate($handle, 0);
    $written = fwrite($handle, json_encode($data, JSON_UNESCAPED_SLASHES));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    if ($written === false) fail(503, 'Unable to process the inquiry. Please try again.');
}

function appendRecord(string $file, array $record): void
{
    $line = json_encode($record, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n";
    $handle = @fopen($file, 'ab');
    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) fclose($handle);
        fail(503, 'Unable to save the inquiry. Please try again.');
    }
    $written = fwrite($handle, $line);
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    if ($written !== strlen($line)) fail(503, 'Unable to save the inquiry. Please try again.');
}

function redirectSuccess(): never
{
    header('Location: /inquiry?success=1', true, 303);
    exit;
}

function fail(int $status, string $message): never
{
    http_response_code($status);
    echo json_encode(['error' => $message], JSON_UNESCAPED_SLASHES);
    exit;
}

function buildEmailBody(array $inquiry): string
{
    return implode("\n", [
        '═ EVAPFit Inquiry ═',
        'Date: ' . $inquiry['timestamp'],
        '',
        '── Contact ──',
        'Name: ' . $inquiry['name'],
        'Company: ' . $inquiry['company'],
        'Email: ' . $inquiry['email'],
        'Phone: ' . $inquiry['phone'],
        'Destination: ' . $inquiry['destination'],
        '',
        '── Requirements ──',
        'Product(s): ' . $inquiry['product_name'],
        'Category: ' . $inquiry['category'],
        'Quantity: ' . $inquiry['quantity'],
        'Target Price: ' . $inquiry['target_price'],
        '',
        '── Specs ──',
        $inquiry['specifications'] ?: '(none)',
        '',
        '── Inquiry Basket ──',
        $inquiry['inquiry_basket'] ?: '(empty)',
        '',
        '── Notes ──',
        $inquiry['notes'] ?: '(none)',
        '',
        'Inquiry ID: ' . $inquiry['id'],
    ]);
}
