//Chiedere l'eta del passegero
var etaPersona = parseInt(prompt("Inserisci la tua Età!"));
document.getElementById("eta_passegero").innerHTML = etaPersona

//chiedere quanti km vuole percorere in totale
var quantitaKm = parseInt(prompt("Inserisci quanti km vuoi percorere!"));
document.getElementById("km_da_percorere").innerHTML = quantitaKm


//controllo che i valori inseriti siano numeri
if (isNaN(etaPersona) || isNaN(quantitaKm)) {
    alert("Hai inserito dei valori non validi!");
}
//se entrambi i valori sono due numeri allora posso proccedere a fare il calcolo
if (!isNaN(etaPersona) && !isNaN(quantitaKm)) {
    //calcolare il prezzo del biglietto
    //prezzo biglietto 0.21 per km
    var prezzoBiglietto = quantitaKm * 0.21;

    //se ha meno di 18 anni sconto del 20%
    //se ha piu di 65 anni sconto del 40%
    var prezzoScontato;

    if (etaPersona < 18) {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto / 10) * 2);
        document.getElementById("prezzo_biglietto").innerHTML = prezzoScontato.toFixed(2);
    } else if (etaPersona > 65) {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto / 10) * 4);
        document.getElementById("prezzo_biglietto").innerHTML = prezzoScontato.toFixed(2);
    } else {
        document.getElementById("prezzo_biglietto").innerHTML = prezzoBiglietto.toFixed(2);
    }
}





//l'output del prezzo deve avere solo due cifre decimali
//con "(qui ci va il numero da arrotondare) .toFixed(qui vanno specificate quanti numeri dopo la virgola)"