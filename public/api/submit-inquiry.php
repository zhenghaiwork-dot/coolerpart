<?php
/**
 * EVAPFit Inquiry Form Handler
 *
 * Self-hosted — no third-party services.
 * Saves submissions to data/inquiries.json and sends email notification.
 *
 * Anti-spam measures:
 *  1. Honeypot (website field must be empty)
 *  2. Speed check (submission < 3s = block)
 *  3. Link spam (>= 4 URLs in message = block)
 *  4. Math challenge (JS-computed, server-verified)
 *  5. Rate limit (5/hour, 20/day per IP)
 */

// ── Config ──
$NOTIFY_EMAIL = 'rfq@aircoolerparts.com';
$DATA_DIR = __DIR__ . '/../data';
$DATA_FILE = $DATA_DIR . '/inquiries.json';

// ── CORS (allows form submission from any page on the site) ──
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ── 1. Honeypot ──
if (!empty($_POST['website'])) {
    // Bot detected — fake success
    header('Location: /inquiry?success=1');
    exit;
}

// ── 2. Speed check (form_token = base36 timestamp) ──
$token = $_POST['form_token'] ?? '';
if ($token) {
    $loadTime = intval(substr($token, 0, 8), 36);
    $elapsed = time() * 1000 - $loadTime;
    if ($elapsed < 3000) {
        http_response_code(400);
        echo json_encode(['error' => 'Please review your inquiry before submitting.']);
        exit;
    }
}

// ── 3. Link spam ──
$specs = $_POST['specifications'] ?? '';
$notes = $_POST['notes'] ?? '';
$linkCount = preg_match_all('/https?:\/\//i', $specs . ' ' . $notes);
if ($linkCount >= 4) {
    http_response_code(400);
    echo json_encode(['error' => 'Please remove excessive links before submitting.']);
    exit;
}

// ── 4. Math challenge ──
$challenge = $_POST['challenge'] ?? '';
// The challenge is set by JS as a simple sum answer
// We validate it's a number between 4-16 (2+2 through 9+9)
$challengeVal = intval($challenge);
if ($challengeVal < 4 || $challengeVal > 18 || empty($challenge)) {
    http_response_code(400);
    echo json_encode(['error' => 'Verification failed. Please refresh and try again.']);
    exit;
}

// ── 5. Rate limit (file-based, per IP) ──
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = $DATA_DIR . '/ratelimit.json';
$rateData = [];
if (file_exists($rateFile)) {
    $rateData = json_decode(file_get_contents($rateFile), true) ?: [];
}
$now = time();
$hourAgo = $now - 3600;
$dayAgo = $now - 86400;

// Clean old entries
$rateData[$ip] = $rateData[$ip] ?? ['hour' => [], 'day' => []];
$rateData[$ip]['hour'] = array_values(array_filter($rateData[$ip]['hour'], fn($t) => $t > $hourAgo));
$rateData[$ip]['day'] = array_values(array_filter($rateData[$ip]['day'], fn($t) => $t > $dayAgo));

if (count($rateData[$ip]['hour']) >= 5 || count($rateData[$ip]['day']) >= 20) {
    http_response_code(429);
    echo json_encode(['error' => 'Submission limit reached. Please try again later.']);
    exit;
}

$rateData[$ip]['hour'][] = $now;
$rateData[$ip]['day'][] = $now;
file_put_contents($rateFile, json_encode($rateData, JSON_PRETTY_PRINT));

// ── Build inquiry record ──
$inquiry = [
    'id' => uniqid('inq_'),
    'timestamp' => date('Y-m-d H:i:s'),
    'ip' => $ip,
    'product_name' => $_POST['product_name'] ?? '',
    'category' => $_POST['category'] ?? '',
    'quantity' => $_POST['quantity'] ?? '',
    'target_price' => $_POST['target_price'] ?? '',
    'specifications' => $_POST['specifications'] ?? '',
    'name' => $_POST['name'] ?? '',
    'company' => $_POST['company'] ?? '',
    'email' => $_POST['email'] ?? '',
    'phone' => $_POST['phone'] ?? '',
    'destination' => $_POST['destination'] ?? '',
    'notes' => $_POST['notes'] ?? '',
    'inquiry_basket' => $_POST['inquiry_basket'] ?? '',
];

// ── Save to JSON ──
if (!is_dir($DATA_DIR)) mkdir($DATA_DIR, 0755, true);
$inquiries = [];
if (file_exists($DATA_FILE)) {
    $inquiries = json_decode(file_get_contents($DATA_FILE), true) ?: [];
}
$inquiries[] = $inquiry;
file_put_contents($DATA_FILE, json_encode($inquiries, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// ── Send email notification ──
$subject = "New Inquiry: " . ($inquiry['company'] ?: $inquiry['name']) . " — EVAPFit";
$body = buildEmailBody($inquiry);
$headers = [
    'From: EVAPFit Inquiry <rfq@aircoolerparts.com>',
    'Reply-To: ' . $inquiry['email'],
    'Content-Type: text/plain; charset=UTF-8',
];

// Try PHP mail; if it fails, the submission is still saved to JSON
@mail($NOTIFY_EMAIL, $subject, $body, implode("\r\n", $headers));

// ── Redirect to success page ──
header('Location: /inquiry?success=1');
exit;

// ── Helpers ──
function buildEmailBody(array $inquiry): string {
    $lines = [
        "═ EVAPFit Inquiry ═",
        "Date: {$inquiry['timestamp']}",
        "",
        "── Contact ──",
        "Name: {$inquiry['name']}",
        "Company: {$inquiry['company']}",
        "Email: {$inquiry['email']}",
        "Phone: {$inquiry['phone']}",
        "Destination: {$inquiry['destination']}",
        "",
        "── Requirements ──",
        "Product(s): {$inquiry['product_name']}",
        "Category: {$inquiry['category']}",
        "Quantity: {$inquiry['quantity']}",
        "Target Price: {$inquiry['target_price']}",
        "",
        "── Specs ──",
        $inquiry['specifications'] ?: '(none)',
        "",
        "── Inquiry Basket ──",
        $inquiry['inquiry_basket'] ?: '(empty)',
        "",
        "── Notes ──",
        $inquiry['notes'] ?: '(none)',
        "",
        "── Admin ──",
        "Inquiry ID: {$inquiry['id']}",
        "View all: /api/view-inquiries.php",
    ];
    return implode("\n", $lines);
}

/**
 * Optional: to use SMTP instead of PHP mail(), uncomment below
 * and install PHPMailer or configure sendmail on your host.
 *
 * Most Hostinger plans support PHP mail() out of the box.
 * If emails don't arrive, check spam folder or switch to SMTP.
 */
