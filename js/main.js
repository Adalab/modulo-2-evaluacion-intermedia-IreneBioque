'use estrict'

const input = document.querySelector('.js_input');
const button = document.querySelector('.js_button');
const clue = document.querySelector('.js_paragraph1');
const trys = document.querySelector('.js_paragraph2');
const main = document.querySelector('.main_js');
let counter = 0;


 function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
 }
    

const randomNumber = getRandomNumber(100);



function number() {
    const numberInserted = parseInt(input.value);
    // debugger;
    if (isNaN(numberInserted)) {
         clue.innerHTML = 'Pista: Tienes que escribir un número entero'
    } else if (numberInserted < 0 || numberInserted > 100) {
        clue.innerHTML = 'Pista: El número debe estar entre 1 y 100.'
    } else if (numberInserted > randomNumber) {
        clue.innerHTML = 'Pista: Demasiado alto.'
    } else if (numberInserted < randomNumber) {
       clue.innerHTML = 'Pista: Demasiado bajo.'
    } else if (numberInserted > 100) {
       clue.innerHTML = 'Pista: El número debe estar entre 1 y 100.'
    } else {
        winner();
    }
    return numberInserted;
};

function winner(){
    return clue.innerHTML = '¡¡¡ Has ganado campeona!!!'
};

function clickedButton() {
    trys.innerHTML = `Número de intentos: ${counter}`;
};
function updateCounter() {
    counter = counter + 1;
    clickedButton();
};
function handleButton(ev) {
    ev.preventDefault();
    number();
    updateCounter();
};



button.addEventListener('click', handleButton);


