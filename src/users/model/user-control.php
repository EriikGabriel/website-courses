<?php

require_once '../../../vendor/autoload.php';


$action = filter_input(INPUT_POST, "action", FILTER_SANITIZE_SPECIAL_CHARS);
$id = filter_input(INPUT_POST, "id", FILTER_SANITIZE_SPECIAL_CHARS);
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
$userDao = new \src\model\UserDAO();

switch ($action) {
    case 'Create User':
        $user->setName($name);
        $user->setEmail($email);
        $user->setPassoword(md5($password));
        $user->setCredit_card_number($credit_card_number);
        $user->setCvv($cvv);
        $user->setTitular($titular);
        $user->setExpire_date($expire_date);
        $user->setCpf($cpf);
        $user->setTel($tel);

        $userDao->create($user);
        break;
    case 'Search Email':
        $search = $userDao->select("usuarios", true, "email", $email)[0];
        
        if($search["senha"] == md5($password)) {
            echo $search["id"];
        } else {
            echo "false";
        }
        break;
    case 'Search Payment Datas':
        $search = $userDao->select("usuarios", true, "id", $id)[0];
        
        echo json_encode($search);
        break;
    default:
        break;
}
