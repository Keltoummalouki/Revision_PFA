
let array = [
    { id : 1 , nom : "Netflix" , prix : 50},
    { id : 2 , nom : "Apple TV" , prix : 60},
    { id : 3 , nom : "OSN +" , prix :70}
];

console.log(array);

let produits = [];
let CompteurtId = 1;

function ajouterProduit(nom , prix) {
    let produit = {
        id : CompteurtId,
        nom : nom,
        prix : prix
    };

    produits.push(produit);
    CompteurtId++;
    console.log(produits);
}

ajouterProduit("Moto", 232223);

function rechercheProduit(nom){
    let produitRechercher = produits.find(function(produit) {
        return produit.nom === nom;
    });

    if (produitRechercher){
        console.log(produitRechercher);
    }else{
        console.log("Produit on trouvé");
    }
}

rechercheProduit("Moto");

function modifierPrix(id, nouveauPrix) {
    let RechercherProduit = produits.find(function(produit){
        return produit.id === id;
    });

    if(RechercherProduit){
        RechercherProduit.prix = nouveauPrix;
        console.log("Prix modifié :" , RechercherProduit);
    }else{
        console.log("Prduit non trouvé");
    }
}

modifierPrix(1, 33);

function supprimerProduit(id){
    let SupprimerProduit = produits.find(function(produit){
        return produit.id === id;
    });
    if(SupprimerProduit){
        produits.splice(SupprimerProduit,1);
        console.log("Produit a ete supprimer :" , SupprimerProduit);
        console.log(produits);
    }else{
        console.log("Produit non trouvé");
    }
}

supprimerProduit(1);





