<?php // referral.php


putenv(file_get_contents('/etc/php_secrets.env'));
$botToken = getenv('TELEGRAM_BOT_TOKEN');
$chatID = getenv('TELEGRAM_CHAT_ID');
$refLog = "referral_logs.log";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

function logAction($type, $ref, $ip) {
    $entry = "[".date('Y-m-d H:i:s')."] $type via $ref from $ip\n";
    file_put_contents($refLog, $entry, FILE_APPEND);
    
    // Telegram alert
    $msg = "📈 New Referral Action\n"
        ."Type: ".strtoupper($type)."\n"
        ."Code: <code>$ref</code>\n"
        ."IP: $ip";
        
    $url = "https://api.telegram.org/bot".BOT_TOKEN."/sendMessage";
    $data = [
        'chat_id' => CHAT_ID,
        'text' => $msg,
        'parse_mode' => 'HTML'
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ref = $_GET['ref'] ?? '';
    $action = $_POST['action'] ?? '';
    
    if($ref && in_array($action, ['vip','pro','upgrade'])) {
        logAction($action, $ref, $_SERVER['REMOTE_ADDR']);
        die(json_encode(['status' => 'logged']));
    }
    
    http_response_code(400);
    die(json_encode(['status' => 'invalid']));
}