<?php 

require('../../../vendor/autoload.php');

$pagarme = new PagarMe\Client('ak_test_vFTACH4GcghprJrb324rZ05eRCYaYe');

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
