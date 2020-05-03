<?php

namespace src\model;

class CourseDAO {

    public function select($selectTable, $isWhere, $whereParam, $whereEqualto) {
        try {
            if($isWhere === true) {
            $sql = "SELECT * FROM ${selectTable} WHERE ${whereParam} = '${whereEqualto}'";
            } else {
                $sql = "SELECT * FROM ${selectTable}"; 
            }

            $stmt = Conexao::getConn()->prepare($sql);
            $stmt->execute();

            if($stmt->rowCount() > 0) {
                $resultado = $stmt->fetchAll(\PDO::FETCH_ASSOC);
                return $resultado;
            }
        } catch (\PDOException $e) {
            echo $e->getCode();
        }
    }
}