var N = prompt("Saisir un nombre = ");
var somme = 0;

function addition(param1, param2){
    if(param2 === undefined){
        param2 = 0;
    }
    return param1 + param2;
}

alert(addition(8,4)); // Renvoie 12

for(let i=0; i<Number(N); i++){
    somme = addition(somme, i+1);
    console.log(somme);
}
alert(somme); // Renvoie 10 