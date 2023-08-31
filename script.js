

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// Dichiarazione variabili
let proseguo = false;
let pariDispari;
let userNumber;
let computerNumber = Math.floor(Math.random()*5)+1;

// Ciclo per digitare pari o dispari con controlli vari
while (!proseguo) {

    pariDispari = prompt('Scegli pari o dispari');
    
    if (pariDispari == 'pari' || pariDispari == 'dispari') {
        proseguo = true;
    } else {
        alert('Devi digitare "pari" oppure "dispari"');
    }

}

console.log('ok pari dispari')

proseguo = false;

// Ciclo per digitare numero con controlli vari
while (!proseguo) {

    userNumber = Number(prompt('digita un numero intero compreso tra 1 e 5'));
    
    if (!isNaN(userNumber) && (userNumber >= 1 && userNumber <= 5) && (Number.isInteger(userNumber))) {
        proseguo = true;
    } else {
        alert('Devi digitare un numero intero compreso tra 1 e 5');
    }

}

console.log('ok numero')

// Determino chi ha vinto
if (ParieDispari(userNumber,computerNumber)) {
    console.log('vince giocatore');
} else {
    console.log('vince computer');
}


/* ########## function ########## */

function ParieDispari (userNumber,computerNumber) {

    let userWin;
    let sumNumbers = userNumber + computerNumber;
    console.log(sumNumbers);

    if ((pariDispari == 'pari' && sumNumbers%2 == 0) || (pariDispari == 'dispari' && sumNumbers%2 != 0)) {
        userWin = true; 
    } else {
        userWin = false;
    }

    return userWin

}


/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

let word = prompt('Inserisci una parola');
//console.log(word);

if (isPalindrome(word)) {
    console.log(word + ' è un palindromo')
} else {
    console.log(word + ' non è un palindromo')
}


/* ########## function ########## */

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
    
    //console.log(wordReverse);
    
    // Creazione variabile booleana che mi dica se la parola è palindromo o no
    let palindromeCheck = false;
    
    if (wordReverse == word) {
        palindromeCheck = true;
    }
    
    //console.log(palindromeCheck);

    return palindromeCheck;

}

