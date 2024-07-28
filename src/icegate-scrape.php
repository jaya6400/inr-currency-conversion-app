<?php

// format the request parameters
$apiUrl = 
    "https://api.zenrows.com/v1/" .
    "?apikey=09333c6508854d0d04b725407e6da95b190be095" .
    "&url=" . urlencode("https://foservices.icegate.gov.in/#/services/viewExchangeRate") .
    "&js_render=true&premium_proxy=true";

// set cURL optiions
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// disable SSL verification
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// sexecute the request
$response = curl_exec($ch);

// get the output
if ($response === false) {
    echo "Error: " . curl_error($ch);
} else {
    echo $response . PHP_EOL;
}

curl_close($ch);
?>

