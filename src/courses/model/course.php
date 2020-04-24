<?php

namespace src\model;

class Course {
    private $name, $description, $classes, $workload, $certificate, $price;

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
     * Get the value of description
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */ 
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of classes
     */ 
    public function getClasses()
    {
        return $this->classes;
    }

    /**
     * Set the value of classes
     *
     * @return  self
     */ 
    public function setClasses($classes)
    {
        $this->classes = $classes;

        return $this;
    }

    /**
     * Get the value of workload
     */ 
    public function getWorkload()
    {
        return $this->workload;
    }

    /**
     * Set the value of workload
     *
     * @return  self
     */ 
    public function setWorkload($workload)
    {
        $this->workload = $workload;

        return $this;
    }

    /**
     * Get the value of isCertificated
     */ 
    public function getCertificate()
    {
        return $this->certificate;
    }

    /**
     * Set the value of isCertificated
     *
     * @return  self
     */ 
    public function setCertificate($certificate)
    {
        $this->certificate = $certificate;

        return $this;
    }

    /**
     * Get the value of price
     */ 
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set the value of price
     *
     * @return  self
     */ 
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }
}