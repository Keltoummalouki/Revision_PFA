function compteurVoyelles(texte){
    let voyellesCompteur = 0;

    for(let i = 0; i < texte.length ; i++){
        voyellesCompteur++;
    }

    console.log(voyellesCompteur);
}

compteurVoyelles("Youcode");