'use estrict';
const input = document.querySelector('.js_input');
let button = document.querySelector('.js_button');
const clue = document.querySelector('.js_paragraph1');
const trys = document.querySelector('.js_paragraph2');


 function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
 }
    

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function number() {
    const numeroIntroducido = input.value;
    //debugger;
if (numeroIntroducido < 0) {
    clue.innerHTML= ' El número debe estar entre 1 y 100.'
} else if (numeroIntroducido > randomNumber && numeroIntroducido < 100) {
    clue.innerHTML+= ' Demasiado alto.' 
} else if (numeroIntroducido < randomNumber) {
    clue.innerHTML+= 'Demasiado bajo.'
} else if (numeroIntroducido > 100) {
    clue.innerHTML+= ' El número debe estar entre 1 y 100.'

} else {
    clue.innerHTML+= ' Has ganado campeona!!!'
}
};
function clickedButton() {
    const number = 0;
    trys.innerHTML += number;
}
function handleButton() {
    number();
    clickedButton();
};



button.addEventListener('click', handleButton);
