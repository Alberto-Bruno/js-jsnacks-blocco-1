console.log('JS OK')

/*
- creare la lista dei nomi autorizzati 
- Comunicare se può partecipare o no.
*/

// creo la lista dei nomi autorizzate
const allowedName = [
    'name0',
    'name1',
    'name2',
    'name3',
    'name4',
    'name5',
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
        result.classList.add('text-danger');
        result.innerText = 'Non trovo il nome in lista';
        return;
    }

    let isAllowed = false;

    // Controlliamo se la mail inserita è tra quelle autorizate
    for (let i = 0; i < allowedName.length; i++) {
        const currentName = allowedName[i];
        console.log(currentName);
        if (currentName === userName) {
            isAllowed = true;
        }
    }
        // TERNARIO... Nome costante = condizione ? se true : se False;
    result.innerText = isAllowed ? 'Benvenuto' : 'Spiacente, non puoi partecipare';
});