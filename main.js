
let firstTerm = ans = 0;
let holdingFirstValue = false;
let oType = '';
const inputBox = document.querySelector('.input');
const result = document.querySelector('.result');

const operatorButtons = Array
.from(document.querySelectorAll('.operator'))
.map(item => item.addEventListener('click', e => storeCurrentValue(item.id)));



// TODO: replace with arrows.
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function storeCurrentValue(operatorType) {
    if(parseInt(inputBox.value)) {  // Only continue if value is legal
        if(!holdingFirstValue) {     // Only store value if not already doing so
            firstTerm = parseInt(inputBox.value);
            console.log(`First term is ${firstTerm}.`);
            inputBox.value = '';
            holdingFirstValue = true;
            oType = operatorType;
        } else {
            operate(firstTerm, oType, parseInt(inputBox.value));
        }
    } 
}

function operate(a, operator, b) {
    switch (operator) {
        case 'add':
            ans = add(a, b);
            break;
        case 'subtract':
            ans = subtract(a, b);
            break;
        case 'multiply':
            ans = multiply(a, b);
            break;
        case 'divide':
            ans = divide(a, b);
            break;
    }
    
    console.log(ans);
    
}