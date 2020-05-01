<?php

namespace src\model;

class UserDAO {
    public function create(User $u) {
        $sql = "INSERT INTO usuarios VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = Conexao::getConn()->prepare($sql);
        $stmt->bindValue(1, $u->getName());
        $stmt->bindValue(2, $u->getPassoword());
        $stmt->bindValue(3, $u->getEmail());
        $stmt->bindValue(4, $u->getCredit_card_number());
        $stmt->bindValue(5, $u->getCvv());
        $stmt->bindValue(6, $u->getTitular());
        $stmt->bindValue(7, $u->getExpire_date());
        $stmt->bindValue(8, $u->getCpf());
        $stmt->bindValue(9, $u->getTel());
        $stmt->bindValue(10, $u->getPhoto());

        $stmt->execute();
    }
}