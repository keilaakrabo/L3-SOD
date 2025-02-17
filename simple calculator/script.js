
function add() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let result = firstNumber + secondNumber;
    document.getElementById('result').innerHTML = `Result: ${result}`;
}

function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let result = firstNumber - secondNumber;
    document.getElementById('result').innerHTML = `Result: ${result}`;
}

function multiply() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let result = firstNumber * secondNumber;
    document.getElementById('result').innerHTML = `Result: ${result}`;
}

function divide() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let result = firstNumber / secondNumber;
    document.getElementById('result').innerHTML = `Result: ${result}`;
}