<?php

require_once '../../../vendor/autoload.php';

$name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_SPECIAL_CHARS);
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
$credit_card_number = filter_input(INPUT_POST, "credit_number", FILTER_SANITIZE_SPECIAL_CHARS);
$cvv = filter_input(INPUT_POST, "cvv", FILTER_SANITIZE_SPECIAL_CHARS);
$titular = filter_input(INPUT_POST, "titular", FILTER_SANITIZE_SPECIAL_CHARS);
$expire_date = filter_input(INPUT_POST, "expire_date", FILTER_SANITIZE_SPECIAL_CHARS);
$cpf = filter_input(INPUT_POST, "cpf", FILTER_SANITIZE_SPECIAL_CHARS);
$tel = filter_input(INPUT_POST, "tel", FILTER_SANITIZE_SPECIAL_CHARS);

$user = new \src\model\User();

$user->setName($name);
$user->setEmail($email);
$user->setPassoword(md5($password));
$user->setCredit_card_number($credit_card_number);
$user->setCvv($cvv);
$user->setTitular($titular);
$user->setExpire_date($expire_date);
$user->setCpf($cpf);
$user->setTel($tel);

$userDao = new \src\model\UserDAO();

$userDao->create($user);