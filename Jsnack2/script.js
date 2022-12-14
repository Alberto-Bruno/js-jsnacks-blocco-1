console.log('JS OK')

/*
- creare la lista dei nomi autorizzati 
- Comunicare se può partecipare o no.
*/

// creo la lista dei nomi autorizzate
const guests = [
    'name0',
    'name1',
    'name2',
    'name3',
    'name4',
    'name5'
];

// prendo gli elementi dalla pagina
const nameField = document.getElementById('name');
const button = document.getElementById('button');
const result = document.getElementById('result');

// aggancio la lista al click del button

button.addEventListener('click', function () {
    // Raccolgo il valore dall'imput (nome)
    const userName = nameField.value.trim();

    // Validazione
    if (!userName) {
        alert('Devi inserire il nome');
        return;
    }

    let isInvited = false;

    // Controlliamo se la mail inserita è tra quelle autorizate
    for (let i = 0; !isInvited && i < guests.length; i++) {
        if (userName === guests[i]) {
            isInvited = true;
        }
    }
    
    // TERNARIO... Nome costante = condizione ? se true : se False;
    const message = isInvited ? 'Benvenuto' : 'Spiacente, non puoi partecipare';

    // Stampo in pagina
    result.innerText = message;
});