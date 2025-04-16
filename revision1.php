<?php

interface ReservableInterface{
	public function reserver(Client $client, DateTime $dateDebut, int $nbJours);
}

abstract class Vehicule {
	protected $id;
	protected $immatriculation;
	protected $marque;
	protected $modele;
	protected $prixJour;
	protected $disponible;
	
	public function __construct($immatriculation, $marque , $modele , $prixJour, $disponible){
		$this->immatriculation = $immatriculation;
		$this->marque = $marque;
		$this->modele = $modele;
		$this->prixJour = $prixJour;
		$this->disponible = $disponible;
	}
	
	public function afficherDetails($immatriculation, $marque , $modele , $prixJour, $disponible){
		echo $this->immatriculation;
		echo $this->marque;
		echo $this->modele;
		echo $this->prixJour;
		echo $this->disponible;
		
	}
	public function calculerPrix(int $jours){
		
	}
	public function estDisponible(){
        return $this->disponible;

		if ($disponible == true) {
            echo "cette vehicule est disponible";
        }else{
            echo "cette vehicule est indisponible";
        }
	}
	
	abstract function getType();
	
}

class Voiture extends Vehicule implements ReservableInterface{
    private $nbPortes;
    private $transmission;

    public function __construct($nbPortes,$transmission){
        $this->nbPortes = $nbPortes;
        $this->transmission = $transmission;
    }

    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
        
    }
    
    public function getType(){
        return $this->immatriculation;
        return $this->marque;
        return $this->modele;
        return $this->prixJour;
        return $this->disponible;
    }

    public function afficherDetails($immatriculation, $marque , $modele , $prixJour, $disponible){
        echo $this->immatriculation;
        echo $this->marque;
        echo $this->modele;
        echo $this->prixJour;
        echo $this->disponible;
    }
    
}

class Moto extends Vehicule implements ReservableInterface{
    private $cylindree;

    public function __construct($cylindree){
        $this->cylindree = $cylindree;
    }
    
    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
		
	}
	
	public function getType(){
    	return $this->immatriculation;
		return $this->marque;
		return $this->modele;
		return $this->prixJour;
		return $this->disponible;
	}

    public function afficherDetails($immatriculation, $marque , $modele , $prixJour, $disponible){
		echo $this->immatriculation;
		echo $this->marque;
		echo $this->modele;
		echo $this->prixJour;
		echo $this->disponible;
	}

}

class Camion extends Vehicule implements ReservableInterface {
    private $capaciteTonnage;

    public function __construct($capaciteTonnage){
        $this->capaciteTonnage = $capaciteTonnage;
    }

    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
		
	}
	
	public function getType(){
    	return $this->immatriculation;
		return $this->marque;
		return $this->modele;
		return $this->prixJour;
		return $this->disponible;
	}

    public function afficherDetails($immatriculation, $marque , $modele , $prixJour, $disponible){
		echo $this->immatriculation;
		echo $this->marque;
		echo $this->modele;
		echo $this->prixJour;
		echo $this->disponible;
	}
}

abstract class Personne{
	protected $nom;
	protected $prenom;
	protected $email;

	abstract function afficherProfil();
}

class Client extends Personne{
	private $numeroClient;
	private $reservations = [];

    public function __construct($numeroClient,$reservations){
        $this->numeroClient = $numeroClient;
        $this->reservations = $reservations;
    }

    public function getNumeroClient(){
        return $this->numeroClient;
    }

    public function getReservations(){
        return $this->reservations;
    }
	
	public function ajouterReservation(Reservation $r){
        
	}
	
	public function afficherProfil(){
            echo $this->nom;
            echo $this->prenom;
            echo $this->email;
    }
	
	public function getHistorique(){
		return $this->getNumeroClient();
        return $this->getReservations();
	}
	
}

class Agence {
	private $nom;
	private $ville;
	private $vehicules = [];
	private $clients = [];
	
	public function __construct($nom,$ville,$vehicules,$clients){
		$this->nom = $nom;
        $this->ville = $ville;
        $this->vehicules = $vehicules;
        $this->clients = $clients;
	}
	
	public function ajouterVehicule(Vehicule $v){
		
	}
	
	public function rechercherVehiculeDisponible(string $type){
		
	}
	
	public function enregistrerClient(Client $c){
		
	}
	
	public function faireReservation(Client $client, Vehicule $v, DateTime $dateDebut, int $nbJours){
		
	}
	
}

class Reservation {
	private $vehicule;
	private $client;
	private $dateDebut;
	private $nbJours;
	private $statut;
	
	public function calculerMontant(){
		
	}
	
	public function confirmer(){
		
	}
	
	public function annuler(){
		
	}
}
