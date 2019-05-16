
number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
count = 1


for(number; number >=1; number--){

	console.log(' '.repeat(number-1) + '#'.repeat(count));

	count ++;

}
