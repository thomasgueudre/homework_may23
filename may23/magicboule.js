prompt("Quelle est ta question?")
var boule = ["Essaye plus tard" , 
				"Essaye encore" , 
				"Pas d'avis" , 
				"C'est ton destin", 
				"Le sort en est jeté" , 
				"Une chance sur deux" , 
				"Repose ta question"];
console.log(boule);

var boule = boule[Math.floor(Math.random()*boule.length)];
alert(boule);