let animals = [];
let compteurId = 1;

function AddAnimal(nom, description){
    let animal = {
        id : compteurId,
        nom : nom,
        description : description
    };
    animals.push(animal);
    compteurId++;
    console.log(animals); 
}
AddAnimal("Cat" , "Cat");

function findAnimal(nom){
    let AnimalRechecher = animals.find(function(animal){
        return animal.nom === nom;
    });
    if(AnimalRechecher){
        console.log(AnimalRechecher);
    }else{
        console.log("Animal non trouvé");
    }
}
findAnimal("Cat");

function updateDescription(id, newDescription){
    let findAnimal = animals.find(function(animal){
        return animal.id === id;                        
    });
    if(findAnimal){
        findAnimal.description = newDescription;
        console.log(findAnimal);
    }else{
        console.log("Animal non trouvé");
    }
}
updateDescription(1, "Dog");

function DeleteAnimal(id){
    let AnimalDeleted = animals.find(function(animal){
        return animal.id === id;    
    });
    if(AnimalDeleted){
        animals.splice(AnimalDeleted,1);
        console.log("L'animal is Deleted :", AnimalDeleted)
    }else{
        console.log("Animal not found");
    }
}
DeleteAnimal(1);
console.log(animals);

