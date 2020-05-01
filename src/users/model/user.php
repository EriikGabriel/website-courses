<?php

namespace src\model;

class User {
    private $id, $name, $passoword, $email, $credit_card_number, $cvv, $titular, $expire_date, $cpf, $tel, $photo;
    
    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of passoword
     */ 
    public function getPassoword()
    {
        return $this->passoword;
    }

    /**
     * Set the value of passoword
     *
     * @return  self
     */ 
    public function setPassoword($passoword)
    {
        $this->passoword = $passoword;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of credit_card_number
     */ 
    public function getCredit_card_number()
    {
        return $this->credit_card_number;
    }

    /**
     * Set the value of credit_card_number
     *
     * @return  self
     */ 
    public function setCredit_card_number($credit_card_number)
    {
        $this->credit_card_number = $credit_card_number;

        return $this;
    }

    /**
     * Get the value of cvv
     */ 
    public function getCvv()
    {
        return $this->cvv;
    }

    /**
     * Set the value of cvv
     *
     * @return  self
     */ 
    public function setCvv($cvv)
    {
        $this->cvv = $cvv;

        return $this;
    }

    /**
     * Get the value of titular
     */ 
    public function getTitular()
    {
        return $this->titular;
    }

    /**
     * Set the value of titular
     *
     * @return  self
     */ 
    public function setTitular($titular)
    {
        $this->titular = $titular;

        return $this;
    }

    /**
     * Get the value of expire_date
     */ 
    public function getExpire_date()
    {
        return $this->expire_date;
    }

    /**
     * Set the value of expire_date
     *
     * @return  self
     */ 
    public function setExpire_date($expire_date)
    {
        $this->expire_date = $expire_date;

        return $this;
    }

    /**
     * Get the value of cpf
     */ 
    public function getCpf()
    {
        return $this->cpf;
    }

    /**
     * Set the value of cpf
     *
     * @return  self
     */ 
    public function setCpf($cpf)
    {
        $this->cpf = $cpf;

        return $this;
    }

    /**
     * Get the value of tel
     */ 
    public function getTel()
    {
        return $this->tel;
    }

    /**
     * Set the value of tel
     *
     * @return  self
     */ 
    public function setTel($tel)
    {
        $this->tel = $tel;

        return $this;
    }

    /**
     * Get the value of photo
     */ 
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * Set the value of photo
     *
     * @return  self
     */ 
    public function setPhoto($photo)
    {
        $this->photo = $photo;

        return $this;
    }
}