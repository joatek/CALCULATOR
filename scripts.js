const displayPreviousOperand = document.querySelector('.displayPreviousOperand');
const displayCurrentOperand = document.querySelector('.displayCurrentOperand');
const btnClrAll = document.querySelector('.clrAll');
const btnClrEntity = document.querySelector('.clrEntity');
const btnNumber = document.querySelectorAll('.numbers');
const btnOperation = document.querySelectorAll('.operation');
const btnEqual = document.querySelector('.equal');

let storedNumber1 = '';
let storedNumber2 = '';
let result = null;
let lastOperation = '';
let haveDecimal = false;

btnNumber.forEach( digit => {
    digit.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDecimal) {
            haveDecimal = true;
        } else if (e.target.innerText === '.' && haveDecimal) {
            return;
        }
        if (e.target.innerText === '.' && storedNumber2 === '') {
            storedNumber2 = '0';
        }
        if (e.target.innerText === '0' && storedNumber2 === '') {
            return; 
        } else if (storedNumber2.length <= 12) {
            storedNumber2 += e.target.innerText;
            displayCurrentOperand.innerText = storedNumber2;
        }  
    })
});