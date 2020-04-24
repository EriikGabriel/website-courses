<?php 

namespace App\Model;

class Conexao {
    private static $instance;

    public static function getConn() {
        if (!isset(self::$instance)) { //? Caso não exista nenhuma instância de conexão ainda
            //? Instanciando uma conexão PDO com o banco
            self::$instance = new \PDO('mysql:host=localhost; dbname=pdo; charset=utf8','root', '');
        }

        //? Retornando a instancia de conexão
        return self::$instance;
    }
}