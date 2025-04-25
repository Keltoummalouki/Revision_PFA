function inverserTexte(texte) {
    let texteInverser = "";

    for ( let i = 0 ; i < texte.length ; i++){
        texteInverser = texte[i] + texteInverser;
    }

    console.log(texteInverser);
}

inverserTexte("texte");