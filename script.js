// basic calculations 

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// operator function 

function operate(operator, num1, num2) {
    let result = 0;
    switch(operator) {
        case "add":
            result = add(num1, num2); 
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
    }
    return result;
}


// create the functions that populate the display when you click 
// the number buttons 
let displayText = document.getElementById("display-text");
let clear = document.getElementById("clear-text");

let currentDisplayValue = "";

let firstNum = 0;
let operator = "";
let secondNum = 0;
let result = 0;

function addBtnStyle(e) {
    e.target.classList.add("num-btn-style");
    setTimeout(function() {
        e.target.classList.remove("num-btn-style");
    }, 80);
}

// number button events 
let numberBtns = document.getElementsByClassName("number");
for (i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", (e) => {
        addBtnStyle(e);
        displayValue(e);

        // toggle AC to C whenever a number button is clicked 
          // C - clears current value
        toggleClear();
    });
}

function toggleClear() {
    clear.textContent = "C";
    clear.addEventListener("click", () => {
        if (operator == "") {
            firstNum = 0;
        } else {
            secondNum = 0;
        }
        currentDisplayValue = "";
        displayText.textContent = 0;

        clear.textContent = "AC";
        clear.addEventListener("click", allClear);
    });
}

function allClear() {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    result = 0;
    currentDisplayValue = "";
    displayText.textContent = 0;
}

function displayValue(e) {
    currentDisplayValue += e.target.textContent;
    displayText.textContent = currentDisplayValue;
}

// store the first number that is input into the calculator 
// when a user presses an operator 


function addOperatorStyle(e) {
    e.target.classList.add("num-btn-style");
    setTimeout(function () {
        e.target.classList.remove("num-btn-style");
    }, 80); 
}


// operator buttons events
let operatorBtns = document.getElementsByClassName("operator");
for (i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", (e) => {
        addOperatorStyle(e);
        operator = e.target.id;

        // this conditional statement allows user to change operator 
        // while maintaining the original first number input
        if (currentDisplayValue == "") {
            firstNum = firstNum;
        } else {
            firstNum = Number(currentDisplayValue);
        }

        // reset display value
        currentDisplayValue = "";
    });
}

// operate() when user presses "=" key
let equalKey = document.getElementById("equal");

equalKey.addEventListener("click", () => {
    secondNum = Number(currentDisplayValue);
    result = operate(operator, firstNum, secondNum);
    displayText.textContent = result;
});
