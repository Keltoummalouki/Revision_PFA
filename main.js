let candidatures = [];
let countId = 1;

function ajouterCandidature(nom, age, projet){
    let newCandidature = [{ id : countId++,
                            nom,
                            age,
                            projet,
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
            console.log("Les Candidates :"),
            console.log( "Id : ${candidat.id}| ${candidat.nom} | ${candidat.age} | ${candidat.projet} | ${candidat.status}")
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
    let candidat = candidatures.find(candidatures => candidatures.id === id)
        if(candidat){
            candidat.status = "Rejetée"
        }else{
            console.log("Ce candidate n'exist pas")
        }
}

function rechercherCandidat(nom){
    let candidat = candidatures.find(candidatures => candidatures.nom === nom)

    console.log("le candidat : \n");
    console.log("Id : ${candidat.id}| ${candidat.nom} | ${candidat.age} | ${candidat.projet} | ${candidat.status}");
}