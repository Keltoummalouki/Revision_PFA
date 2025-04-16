let candidatures = [];
let countId = 1;

function ajouterCandidature(nom, age, projet){
    let newCandidature = [{ id : countId++,
                            nom : nom,
                            age : age,
                            projet : projet,
                            statut : "en attente"
                            }];
    
    candidatures.push(newCandidature);
    console.log("Candidat ajouter");
    afficherToutesLesCandidatures();
}

function afficherToutesLesCandidatures(){
    if( candidatures.length === 0){
        console.log("0 candidatures");
        return;
    }else{
        candidatures.forEach( candidat => (        
            console.log("Les Candidate :"),
            console.log( candidat.id| candidat.nom | candidat.age | candidat.projet | candidat.status)
    ));}

}

function validerCandidature(id){
    let Candidat = candidatures.find(candidatures => candidatures.id === id)
    
    if(Candidat){
    Candidat.status = "Validée"
    }else{
    console.log("Ce candidate n'exist pas")
    }
    
}

function rejeterCandidature(id){
    let Candidat = candidatures.find(candidatures => candidatures.id === id)
        if(Candidat){
            Candidat.status = "Rejetée"
        }else{
            console.log("Ce candidate n'exist pas")
        }
}

function rechercherCandidat(nom){
    let Candidat = candidatures.find(candidatures => candidatures.nom === nom)

    console.log("le candidat : \n");
    console.log(Candidat.id);
    console.log(Candidat.nom);
    console.log(Candidat.age);
    console.log(Candidat.project);
    console.log(Candidat.status);
}


