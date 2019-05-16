
let number;
let count=1;
number = prompt("De quel nombre veux-tu calculer le factoriel ?");
initNumber = number


for(number; number >=1; number--){
  count = count * number;

}

console.log(`Le factoriel de ${initNumber} est : ${count}`);