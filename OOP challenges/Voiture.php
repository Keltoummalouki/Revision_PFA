<?php 

class Voiture {
    private $marque;
    private $modele;
    private $annee;

    public function __construct($marque, $modele, $annee){
        $this->marque = $marque;
        $this->modele = $modele;
        $this->annee = $annee;
    }

    public function afficherDetails(){
        echo "marque de voiture est :" . $this->marque . "<br>";
        echo "modele de voiture est :" . $this->modele . "<br>";
        echo "annee de voiture est :" . $this->annee . "<br>";
    }
}

$voitureLambo = new Voiture("Lambo" , "Urus", "2024");
$voitureLambo->afficherDetails();