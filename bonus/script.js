

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// Dichiarazione variabili
let pariDispari;
let userNumber;
let computerNumber;

let inputPariDispari = document.getElementById('pariDispari');
let inputuserNumber = document.getElementById('userNumber');
let btnAvvio = document.getElementById('avviaGioco');

btnAvvio.addEventListener('click', function() {

    // Assegnazione valori alle variabili
    pariDispari = inputPariDispari.value;
    userNumber = Number(inputuserNumber.value);
    computerNumber = Math.floor(Math.random()*5)+1;

    // Controllo che il numero sia intero da 1 a 5
    if (!isNaN(userNumber) && (userNumber >= 1 && userNumber <= 5) && (Number.isInteger(userNumber))) {
        
        //Stampo risultato in pagina
        document.getElementById('computerRis').innerHTML = ('Numero generato dal computer: ' + computerNumber);
        document.getElementById('sommaNum').innerHTML = ('Somma numero immesso da utente e generato dal computer: ' + (computerNumber + userNumber));

        // Determino chi ha vinto
        if (ParieDispari(userNumber, computerNumber)) {
            console.log('vince giocatore');
            //Stampo risultato in pagina
            document.getElementById('dichiarazVincitore').innerHTML = ('vince giocatore');
        } else {
            console.log('vince computer');
            //Stampo risultato in pagina
            document.getElementById('dichiarazVincitore').innerHTML = ('vince computer');
        }
    } else {
        alert('Devi digitare un numero intero compreso tra 1 e 5');
    }

})


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

// Dichiarazione variabili
let inputWord = document.getElementById('word');
let btnAvvioPalindromo = document.getElementById('avviaPalindromo');

btnAvvioPalindromo.addEventListener('click', function(){

    let word = inputWord.value;
    //console.log(word);
    
    if (isPalindrome(word)) {
        console.log(word + ' è un palindromo')
        //Stampo risultato in pagina
        document.getElementById('risultatoPalindromo').innerHTML = (word + ' è un palindromo');

    } else {
        console.log(word + ' non è un palindromo')
        //Stampo risultato in pagina
        document.getElementById('risultatoPalindromo').innerHTML = (word + ' non è un palindromo');
    }

})


/* ########## function ########## */
function isPalindrome (wordToCheck) {

    // Inizializzo variabili utili
    let wordLength = wordToCheck.length - 1;
    //console.log(wordLength);
    console.log(wordToCheck);
    let wordReverse = '';
    
    // ciclo per creare parola letta al contrario
    for (let i = wordLength; i >= 0; i--) {
    
        //console.log(wordToCheck[i]);
        wordReverse += wordToCheck[i];
    
    }
    
    console.log(wordReverse);
    
    // Creazione variabile booleana che mi dica se la parola è palindromo o no
    let palindromeCheck = false;
    
    if (wordReverse == wordToCheck) {
        palindromeCheck = true;
    }
    
    //console.log(palindromeCheck);

    return palindromeCheck;

}

