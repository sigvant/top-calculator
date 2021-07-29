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
let operatorPressed;

const span = document.querySelector('.values');
const numbers = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');
const additionButton = document.querySelector('.addition');
const subctractionButton = document.querySelector('.subtraction');
const multiplicationButton = document.querySelector('.multiplication');
const divisionButton = document.querySelector('.division');
const equalButton = document.querySelector('.operate');
const deleteButton = document.querySelector('.delete');

function clearScreen() {
    span.textContent = 0;
    clearOperatorsAndOperands();
}

function adjustNumberSize(number) {
    if(Number(number % 1) != 0) {
        return Number(number.toFixed(10));
    } else {
        return Number(number.toFixed(10));
    }
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
        operatorPressed = false;
    } else {
        span.textContent = span.textContent + `${number.textContent}`;  
        if(span.textContent.length > 10) {
            span.textContent = span.textContent.substr(0,12);
        }
    }
}))

clearButton.addEventListener('click', clearScreen);

additionButton.addEventListener('click', () => {
    if(operatorPressed) {
        displayValue = true;
        console.log('test');
        
    } else if(operand1) {
        operator = 'addition';
        operand2 = span.textContent;
        console.log(operator, operand1, operand2);
        span.textContent = `${adjustNumberSize(operate(operator, +operand1, +operand2))}`;
        operand1 = span.textContent;
        displayValue = true;
        operatorPressed = true;
        
    } else {
        operator = 'addition';
        operand1 = span.textContent; 
        displayValue = true;       
    }
    
})

subctractionButton.addEventListener('click', () => {
    if(operatorPressed) {
        displayValue = true;
        console.log('test');
        
    } else if(operand1) {
        operator = 'subtraction';
        operand2 = span.textContent;
        console.log(operator, operand1, operand2);
        span.textContent = `${adjustNumberSize(operate(operator, +operand1, +operand2))}`;
        operand1 = span.textContent;
        displayValue = true;
        operatorPressed = true;
        
    } else {
        operator = 'subtraction';
        operand1 = span.textContent; 
        displayValue = true;       
    }
})

multiplicationButton.addEventListener('click', () => {
    if(operatorPressed) {
        displayValue = true;
        console.log('test');
        
    } else if(operand1) {
        operator = 'multiplication';
        operand2 = span.textContent;
        console.log(operator, operand1, operand2);
        span.textContent = `${adjustNumberSize(operate(operator, +operand1, +operand2))}`;
        operand1 = span.textContent;
        displayValue = true;
        operatorPressed = true;
        
    } else {
        operator = 'multiplication';
        operand1 = span.textContent; 
        displayValue = true;       
    }
})

divisionButton.addEventListener('click', () => {
    
    if(operatorPressed) {
        displayValue = true;
        console.log('test');
        
    } else if(operand1) {
        operator = 'division';
        operand2 = span.textContent;
        console.log(operator, operand1, operand2);
        span.textContent = `${adjustNumberSize(operate(operator, +operand1, +operand2))}`;
        operand1 = span.textContent;
        displayValue = true;
        operatorPressed = true;
        
    } else {
        operator = 'division';
        operand1 = span.textContent; 
        displayValue = true;       
    }
})
equalButton.addEventListener('click', () => {
    operand2 = span.textContent;
    console.log(operator, operand1, operand2);
    span.textContent = `${adjustNumberSize(operate(operator, +operand1, +operand2))}`;
    displayValue = true;
    operatorPressed = true;
    clearOperatorsAndOperands();
    operand1 = span.textContent;    
    console.log(operator, operand1, operand2);

})

deleteButton.addEventListener('click', () => {
    span.textContent = span.textContent.slice(0, -1);
    if(span.textContent == '') {
        span.textContent = '0';
    }
        
})

