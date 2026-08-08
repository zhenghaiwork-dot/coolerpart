<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'GET' && $_SERVER['REQUEST_METHOD'] !== 'HEAD') {
    http_response_code(405);
    echo json_encode(['status' => 'method_not_allowed']);
    exit;
}

$dataDir = getenv('EVAPFIT_DATA_DIR') ?: __DIR__ . '/../../data';
$storageReady = is_dir($dataDir) ? is_writable($dataDir) : is_writable(dirname($dataDir));
$healthy = PHP_VERSION_ID >= 80100 && $storageReady;

http_response_code($healthy ? 200 : 503);
if ($_SERVER['REQUEST_METHOD'] !== 'HEAD') {
    echo json_encode([
        'status' => $healthy ? 'ok' : 'degraded',
        'storage' => $storageReady ? 'ready' : 'unavailable',
        'time' => gmdate('c'),
    ], JSON_UNESCAPED_SLASHES);
}
