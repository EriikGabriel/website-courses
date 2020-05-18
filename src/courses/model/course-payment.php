<?php

use function GuzzleHttp\json_encode;

require('../../../vendor/autoload.php');

$pagarme = new PagarMe\Client('ak_test_vFTACH4GcghprJrb324rZ05eRCYaYe');

$method = filter_input(INPUT_POST, 'method', FILTER_SANITIZE_SPECIAL_CHARS);
$cardNumber = filter_input(INPUT_POST, 'card_number', FILTER_SANITIZE_SPECIAL_CHARS);
$cvv = filter_input(INPUT_POST, 'cvv', FILTER_SANITIZE_SPECIAL_CHARS);
$titular = filter_input(INPUT_POST, 'titular', FILTER_SANITIZE_SPECIAL_CHARS);
$expireDate = filter_input(INPUT_POST, 'expire_date', FILTER_SANITIZE_SPECIAL_CHARS);
$courseName = filter_input(INPUT_POST, 'course_name', FILTER_SANITIZE_SPECIAL_CHARS);
$coursePrice = filter_input(INPUT_POST, 'course_price', FILTER_SANITIZE_SPECIAL_CHARS);

$pieceNumber = explode(" ", $cardNumber);
$cardNumber = implode("", $pieceNumber);

$pieceDate = explode("/", $expireDate);
$expireDate = implode("", $pieceDate);

if($method == 'credit_card') {
    $transaction = $pagarme->transactions()->create([
        'amount' => 1000,
        'payment_method' => "${method}",
        'card_holder_name' => "${titular}",
        'card_cvv' => "${cvv}",
        'card_number' => "${cardNumber}",
        'card_expiration_date' => "${expireDate}",
        'customer' => [
            'external_id' => '1',
            'name' => $titular,
            'type' => 'individual',
            'country' => 'br',
            'documents' => [
              [
                'type' => 'cpf',
                'number' => '00000000000'
              ]
            ],
            'phone_numbers' => [ '+551199999999' ],
            'email' => 'cliente@email.com'
        ],
        'billing' => [
            'name' => $titular,
            'address' => [
              'country' => 'br',
              'street' => 'Avenida Brigadeiro Faria Lima',
              'street_number' => '1811',
              'state' => 'sp',
              'city' => 'Sao Paulo',
              'neighborhood' => 'Jardim Paulistano',
              'zipcode' => '01451001'
            ]
        ],
        'items' => [
          [
            'id' => '1',
            'title' => "Curso de " . $courseName,
            'unit_price' => $coursePrice,
            'quantity' => 1,
            'tangible' => false
          ]
        ]
    ]);

    echo json_encode($transaction);
} else {
    echo json_encode([]);
}
