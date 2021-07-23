// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
do{
    var scelta = prompt('Scegli pari o dispari');
    scelta = scelta.toLowerCase();
}while(scelta != 'pari' && scelta != 'dispari');
console.log('Hai scelto: ' + scelta);

do{
    var numero = parseInt(prompt('Scegli un numero da 1 a 5'));
}while(numero > 5 || numero < 1 || isNaN(numero));
console.log('Hai scelto il numero: ' + numero);

function random(){
    return Math.floor(Math.random() * 5) + 1
}
var numeroPC = random();
console.log('Il numero casuale generato è: ' + numeroPC);

function somma(num1, num2){
    return num1 + num2;
}
var sommaNumeri = somma(numero, numeroPC);
console.log('La somma dei due numeri è: ' + sommaNumeri);

function pariDispari(somma){
    if(somma % 2 == 0)
        return 'pari';
    else
        return 'dispari';
}
var risultato = pariDispari(sommaNumeri);
console.log('La somma dei due numeri è ' + risultato);

if(scelta == risultato)
    console.log('Complimenti hai vinto.');
else
    console.log('Mi dispiace, hai perso, ricarica la pagina e riprova!');