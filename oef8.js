// uitkomst wordt maar 1x bepaald, dus je krijgt een oneindige lus. 

/**
 * Op basis van een kerngetal (0 tot 10) (opgegeven in het programm) toon ik de tafel van 10 tot 
 * aan dit getal
 * 
 * Ik heb bv 5 als kerngetal
 * als resultaat krijg ik in de console
 * 
 * 0 x 10 = 0
 * 1 x 10 = 10
 * 2 x 10 = 20
 * 3 x 10 = 30
 * 4 x 10 = 40
 * 5 x 10 = 50
 */
let kernGetal = 5
let uitkomst = kernGetal * 10

for (kernGetal; kernGetal < uitkomst ; kernGetal * 10) {
    console.log(kernGetal)
    
}
