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
    });
});

btnOperation.forEach(operation => {
    operation.addEventListener('click', (e) => {
        haveDecimal = false;
        const operationName = e.target.innerText;

        if (!storedNumber2) return;
        
        if (storedNumber1 && storedNumber2 && lastOperation) {
            calculate();
        } else {
            result = parseFloat(storedNumber2);
        }
        update(operationName);
        lastOperation = operationName;
        
    });
});

function update(name = '') {
    if (storedNumber2 === '0.') {
        storedNumber1 = '0' + ' ' + name + ' ';
    } else {
        storedNumber1 = result + ' ' + name + ' ';
    }
    displayPreviousOperand.innerText = storedNumber1;
    storedNumber2 = '';
}

function calculate() {
    if (lastOperation === '+') {
        result = result + parseFloat(storedNumber2);
        displayCurrentOperand.innerText = result;
    } else if (lastOperation === '-') {
        result = result - parseFloat(storedNumber2);
        displayCurrentOperand.innerText = result;
        
    } else if (lastOperation === '÷') {
        result = result / parseFloat(storedNumber2);
        displayCurrentOperand.innerText = result;
        
    } else if (lastOperation === '×') {
        result = result * parseFloat(storedNumber2);
        displayCurrentOperand.innerText = result;
        
    } 
}

btnEqual.addEventListener('click', (e) => {
    if (storedNumber1 && storedNumber2 && lastOperation) {
        displayPreviousOperand.innerText = storedNumber1 + storedNumber2 + ' = ';
        calculate();
    }
    
});

btnClrAll.addEventListener('click', (e) => {
    displayCurrentOperand.innerText = '0';
    displayPreviousOperand.innerText = '';
    storedNumber1 = '';
    storedNumber2 = '';
});

btnClrEntity.addEventListener('click', (e) => {
    displayCurrentOperand.innerText = '0';
    storedNumber2 = '';
})
