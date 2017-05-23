var mystere = ;
var reponse = prompt("Donne un nombre");

  do
    {
        // On demande le nombre
        prompt("Quel est le nombre ? ");

        // On compare le nombre entré avec le nombre mystère

        if (mystere > reponse)
            prompt("C'est plus !");
        else if (mystere < reponse)
            prompt("C'est moins !");
        else
            alert("Bravo, vous avez trouve le nombre mystere !!!");
    } while (reponse != mystere);

alert(reponse);