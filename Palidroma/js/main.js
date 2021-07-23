// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inserire una parola");

function reverse_string(word){
    let wordReverse = '';
    let i = word.length - 1;
    
    while (i >= 0) {
        wordReverse += word[i];
        i--;
    }

    if(word == wordReverse){
        return 'La parola inserita è palindroma';
    } else {
        return 'La parola inserita non è palindroma';
    }
}

console.log(reverse_string(parola));