function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if(b == 0) return 'LRANJA';
    else return (a / b);
}

function operate(operator, a, b) {
    switch(operator) {
        case 'addition':
            return add(a, b);
            break;
        case 'subtraction':
            return subtract(a, b);
            break;
        case 'multiplication':
            return multiply(a, b);
            break;
        case 'division':
            return divide(a, b);
            break;
        default:
            return span.textContent;
    }
}

let displayValue = false;
let operand1;
let operand2;
let operator;
let timesClicked = 0;

const span = document.querySelector('.values');
const numbers = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');
const additionButton = document.querySelector('.addition');
const subctractionButton = document.querySelector('.subtraction');
const multiplicationButton = document.querySelector('.multiplication');
const divisionButton = document.querySelector('.division');
const equalButton = document.querySelector('.operate');

function clearScreen() {
    span.textContent = 0;
    // clearOperatorsAndOperands();
}

function clearOperatorsAndOperands() {
    operand1 = null;
    operand2 = null;
    operator = null;    
}

numbers.forEach(number => number.addEventListener('click', () => {
    if(displayValue || span.textContent == 0) {
        span.textContent = `${number.textContent}`;
        displayValue = false;
    } else {
        span.textContent = span.textContent + `${number.textContent}`;  
    }
}))

clearButton.addEventListener('click', clearScreen);

additionButton.addEventListener('click', () => {
    if(operand1) {
        operator = 'addition';
        operand2 = span.textContent;
        console.log(operator, operand1, operand2);
        span.textContent = `${operate(operator, +operand1, +operand2)}`;
        operand1 = span.textContent;
        displayValue = true;
        
    } else {
        operator = 'addition';
        operand1 = span.textContent; 
        displayValue = true;       
    }
    
})

subctractionButton.addEventListener('click', () => {
    operator = 'subtraction';
    operand1 = span.textContent;
    clearScreen(); 
})

multiplicationButton.addEventListener('click', () => {
    operator = 'multiplication';
    operand1 = span.textContent;
    clearScreen(); 
})

divisionButton.addEventListener('click', () => {
    operator = 'division';
    operand1 = span.textContent;
    clearScreen(); 
})
equalButton.addEventListener('click', () => {
    operand2 = span.textContent;
    console.log(operator, operand1, operand2);
    span.textContent = `${operate(operator, +operand1, +operand2)}`;
    displayValue = true;
    clearOperatorsAndOperands();
    console.log(operator, operand1, operand2);

})



