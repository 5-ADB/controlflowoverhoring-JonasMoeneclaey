// zeer veel onnodige variabelen
// Je opbouw van case is niet correct
// een conditie kan geen inistialisatie bevatten (1 enkele = )

/**
 * Maak zelf de nodige variabelen aan voor onderstaande probleem
 * 
 * Een huis is geprogrammeerd op woorden. 
 * Een gebruiker spreekt een woord uit en op basis van het woord 
 * gebeurt een actie (deze acties worden uitgeschreven in de console)
 * onderstaande commando's kunnen gegeven worden
 * commande     -   console output
 * - open deur  =>  deur gaat open
 * - muziek     =>  muziek start met spelen
 * - stilte     =>  Muziek gaat uit
 * - licht aan  =>  Licht gaat aan
 * - licht uit  =>  licht gaat uit
 * 
 */
let commande;
let openDeur = true
let muziek = true
let stilte = true
let lichtAan = true
let lichtUit = true
switch (commande) {
    case(openDeur = true):{
        console.log("deur gaat open");
    }
    case(muziek = true):{
        console.log("muziek start met spelen")
    }
    case(stilte = true):{
        console.log("muziek gaat uit")
    }
    case(lichtAan = true):{
        console.log("licht gaat aan");
    }
    case(lichtUit = true):{
        console.log("licht gaat uit")
    }
}