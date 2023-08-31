

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/






/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

let word = prompt('Inserisci una parola');
//console.log(word);

if (isPalindrome(word)) {
    console.log('la parola è un palindromo')
} else {
    console.log('la parola non è un palindromo')
}

function isPalindrome (wordToCheck) {

    // Inizializzo variabili utili
    let wordLength = wordToCheck.length - 1;
    //console.log(wordLength);
    let wordReverse = '';
    
    // ciclo per creare parola letta al contrario
    for (let i = wordLength; i >= 0; i--) {
    
        //console.log(wordToCheck[i]);
        wordReverse += wordToCheck[i];
    
    }
    
    console.log(wordReverse);
    
    // Creazione variabile booleana che mi dica se la parola è palindromo o no
    let palindromeCheck = false;
    
    if (wordReverse == word) {
        palindromeCheck = true;
    }
    
    //console.log(palindromeCheck);

    return palindromeCheck;

}

