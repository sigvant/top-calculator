function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return (a * b).toFixed(4);
}

function divide(a, b) {
    return (a / b).toFixed(4);
}

function operate(operator, a, b) {
    switch(operator) {
        case 'addition':
            add(a, b);
            break;
        case 'subtraction':
            subtract(a, b);
            break;
        case 'multiplication':
            multiply(a, b);
            break;
        case 'division':
            divide(a, b);
            break;
        default:
            console.log('oops');
    }
}