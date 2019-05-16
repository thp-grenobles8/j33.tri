input = prompt("Wesh, je suis un teen chat bot, qu'est_ce que tu me veux ?");

if(input.slice(-1) === "?") {
	console.log("Ouais Ouais ..., je m'en cure le naso");
} else if(input === input.toUpperCase() && input.length > 1){
	console.log("Pwa, calme tes morts");
} else if(input.includes("fortnite")) {
	console.log("on s'fait une partie soum-soum ?");
} else if(input === "") {
	console.log("t'es en PLS ?");
} else {
	console.log("Balek");
} 