function arrayTotal(arr){
    let compteur = 0;

    for(let i = 0 ; i < arr.length ; i++){
        compteur = arr[i] + compteur;
    }
    console.log(compteur);
}
arrayTotal([1,2,3,4,5]);