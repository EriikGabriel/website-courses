<?php

require_once '../../../vendor/autoload.php';

$user = new \src\model\User();

$name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_SPECIAL_CHARS);
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
$credit_card_number = filter_input(INPUT_POST, "credit_number", FILTER_SANITIZE_SPECIAL_CHARS);
$cvv = filter_input(INPUT_POST, "cvv", FILTER_SANITIZE_SPECIAL_CHARS);
$titular = filter_input(INPUT_POST, "titular", FILTER_SANITIZE_SPECIAL_CHARS);
$expire_date = filter_input(INPUT_POST, "expire_date", FILTER_SANITIZE_SPECIAL_CHARS);
$cpf = filter_input(INPUT_POST, "cpf", FILTER_SANITIZE_SPECIAL_CHARS);
$tel = filter_input(INPUT_POST, "tel", FILTER_SANITIZE_SPECIAL_CHARS);

echo "Nome: " . $name . "</br>";
echo "Email: " . $email . "</br>";
echo "Senha: " . $password . "</br>";
echo "Número do Cartão de Crédito: " . $credit_card_number . "</br>";