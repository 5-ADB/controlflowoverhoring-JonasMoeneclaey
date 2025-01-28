// hier staat minder dan opgave 4 

/**
 * Je bouwt verder op de opgave 4.
 * 
 *  * commande     -   console output
 * - open deur  =>  deur gaat open
 * - muziek     =>  muziek start met spelen
 * - stilte     =>  Muziek gaat uit
 * - licht aan  =>  Licht gaat aan
 * - licht uit  =>  licht gaat uit
 * 
 * stilte geeft echter enkel een output als de radio aan staat
 * licht uit geeft enkel otuput als het licht al aan was
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
    case(stilte = true && muziek == true ):{
        console.log("muziek gaat uit")
    }
    case(lichtAan = true):{
        console.log("licht gaat aan");
    }
    case(lichtUit = true):{
        console.log("licht gaat uit")
    }
}