console.log('JS OK')

// chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// prendo l'elemento
const userElement = document.getElementById('user');

// chiedo per 10 volte all'utente di inserire un numero

let sum = 0;

let isValid = true;

for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt('inserisci il numero', 1).trim());
    if (isNaN(number)) {
        isValid =false;
    } else {
        sum += number;
    }
}

const message = isValid ? `la somma dei tuoi numer è ${sum}` : 'Hai inserito valori non validi';

userElement.innerText = message;




