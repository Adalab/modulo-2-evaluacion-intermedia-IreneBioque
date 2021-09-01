'use estrict';
const input = document.querySelector('.js_input');
let button = document.querySelector('.js_button');
const clue = document.querySelector('.js_paragraph1');
const trys = document.querySelector('.js_paragraph2');


 function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
 }
    
// function getRandomNumber() {
//     const randomNumber = Math.round(Math.random() * 100);
//     return randomNumber;
// };

console.log(getRandomNumber(100));

function number() {
    const randomNumber = getRandomNumber(100);
    const numeroIntroducido = input.value;
    //debugger;
if (numeroIntroducido < 0) {
    clue.innerHTML+= ' El número debe estar entre 1 y 100.'
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


function handleButton() {
    number();
    
};

button.addEventListener('click', handleButton);
