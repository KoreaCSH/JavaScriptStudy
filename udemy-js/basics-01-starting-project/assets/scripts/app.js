const defaultResult = 0;
let currentResult = defaultResult;

let logEntreis = [];

function getEnteredNumber() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getEnteredNumber();
    const resultBefore = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', resultBefore, enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: resultBefore,
        enteredNumber: enteredNumber,
        result: currentResult
    };
    logEntreis.push(logEntry);
    console.log(logEntreis);
}

function sub() {
    const enteredNumber = getEnteredNumber();
    const resultBefore = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', resultBefore, enteredNumber);
}

function multiply() {
    const enteredNumber = getEnteredNumber();
    const resultBefore = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', resultBefore, enteredNumber);

}

function divide() {
    const enteredNumber = getEnteredNumber();
    const resultBefore = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', resultBefore, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);