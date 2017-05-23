var adj = ["déterminé",
			"diligent",
			"dominant",
			"doué",
			"égoïste",
			"entraînant",
			"farfelu"];
var nom = ["ASSASSIN",
			"BASTARD",
			"BATARD",
			"BETA",
			"BOUDIN",
			"BOUFFON",
			"BOURRIN",
			"BOURRIQUE",
			"CANARD"];
var adj2 = ["coupable",
			"débordé",
			"dégoûté",
			"déprimé",
			"dérangé",
			"douloureux"];

var boule = adj[Math.floor(Math.random() * adj.length)] + " " 
		+ nom[Math.floor(Math.random() * nom.length)] + " "
		+ adj2[Math.floor(Math.random() * adj2.length)] ;
alert(boule);
