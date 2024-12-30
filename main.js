
let firstTerm = ans = 0;
let holdingFirstValue = false;
let operatorPressed = false;

let oType = '';
const inputBox = document.querySelector('.input');
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', e => resetCalculator());

function resetCalculator() {
    firstTerm = ans = 0;
    holdingFirstValue = operatorPressed = false;
    inputBox.value = '';
}

// Wire logic buttons
const operatorButtons = Array
.from(document.querySelectorAll('.operator'))
.map(item => item.addEventListener('click', e => storeCurrentValue(item.id)));

// Wire number buttons
const numberButtons = Array
.from(document.querySelectorAll('.number'))
.map(item => item.addEventListener('click', e => updateDisplay(item.textContent)));

function updateDisplay(number) {
    if(operatorPressed) { // Clear the display if an operator was just pressed.
        inputBox.value = '';
        operatorPressed = false;
    }
    inputBox.value += number;
}

function storeCurrentValue(operatorType) {
    if(parseFloat(inputBox.value) || inputBox.value === '') {  // Only continue if value is legal
        if(!holdingFirstValue) {     // Only store value if not already doing so
            
            if(operatorType !== 'equals') operatorPressed = true;

            firstTerm = parseFloat(inputBox.value);
                        
            console.log(`First term is ${firstTerm}.`);
            holdingFirstValue = true;
            oType = operatorType;
        } else {
            console.log(operatorPressed);
            
            if(!operatorPressed) {
                operate(firstTerm, oType, parseFloat(inputBox.value));
                // Call function recursively 
                storeCurrentValue(operatorType);
            }
        }
    } 
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

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
    
    holdingFirstValue = false;
    operatorPressed = false;
    inputBox.value = ans.toFixed(2);
}