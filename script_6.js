serine = ["UCU","UCC","UCA","UCG","AGU","AGC"]
proline = ["CCU","CCC","CCA","CCG"]
leucine = ["UUA","UUG"]
phenylalanine = ["UUU","UUC"]
arginine = ["CGU","CGC","CGA","CGG","AGA","AGG"]
tyrosine = ["UAU","UAC"]

string = "CCGUCGUUGCGCUACAGC"
string2 = "CCUCGCCGGUACUUCUCG"
count = 0
var array = []


for(count; count <= string.length-1; count + 3) {
	tri = string.substring(count, count+3);
		if(serine.includes(tri)) {
	    	array.push("Sérine");
	  	} else if(proline.includes(tri)) {
	  		array.push("Proline");
	  	} else if(leucine.includes(tri)) {
	  		array.push("Leucine");
	  	} else if(phenylalanine.includes(tri)) {
	  		array.push("Phénylalanine");
	  	} else if(arginine.includes(tri)) {
	  		array.push("Arginine");
	  	} else if (tyrosine.includes(tri)) {
	  		array.push("Tyrosine");
	  	}
	count += 3;
}

console.log(array.join('-'))