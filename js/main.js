'use estrict'

const input = document.querySelector('.js_input');
let button = document.querySelector('.js_button');
const clue = document.querySelector('.js_paragraph1');
const trys = document.querySelector('.js_paragraph2');
const main = document.querySelector('.main_js');
let counter = 0;
 function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
 }
    

const randomNumber = getRandomNumber(100);
console.log(randomNumber);


function number() {
    const numeroIntroducido = input.value;
    // debugger;
    if (isNaN(numeroIntroducido)) {
         clue.innerHTML = 'Pista: Tienes que escribir un número entero'
    } else if (numeroIntroducido < 0 || numeroIntroducido > 100) {
        clue.innerHTML = 'Pista: El número debe estar entre 1 y 100.'
    } else if (numeroIntroducido > randomNumber) {
        clue.innerHTML = 'Pista: Demasiado alto.'
    } else if (numeroIntroducido < randomNumber) {
       clue.innerHTML = 'Pista: Demasiado bajo.'
    } else if (numeroIntroducido > 100) {
       clue.innerHTML = 'Pista: El número debe estar entre 1 y 100.'
    } else {
      clue.innerHTML = '¡¡¡ Has ganado campeona!!!'
    }
    return numeroIntroducido;
};

function clickedButton() {
    trys.innerHTML = `Número de intentos: ${counter}`;
}
function updateCounter() {
    counter = counter + 1;
    clickedButton();
}
function handleButton(ev) {
    ev.preventDefault();
    number();
    updateCounter();
};



button.addEventListener('click', handleButton);


