<?php 

namespace src\model;

class Conexao {
    private static $instance;

    public static function getConn() {
        if (!isset(self::$instance)) {
            try {
                self::$instance = new \PDO('mysql:host=localhost; dbname=db_game_hype; charset=utf8','root', '');
            } catch (\PDOException $e) {
                die("<h3 style='text-align: center;'> Erro: " . $e->getMessage() . "</h3>");
            }
        }

        //? Retornando a instancia de conexão
        return self::$instance;
    }
}