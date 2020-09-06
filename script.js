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

let buttons = document.getElementsByTagName("button");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        console.log(e.target.textContent);
    });
}

// expected behavior: 
// numbers clicked will keep adding onto the display if no operator is clicked
// 