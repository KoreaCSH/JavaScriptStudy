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

function writeToLog(operator, prevResult, enteredNumber, newResult) {
    const logEntry = {
        operation: operator,
        prevResult: prevResult,
        enteredNumber: enteredNumber,
        result: newResult
    };
    logEntreis.push(logEntry);
    console.log(logEntreis);
}

function add() {
    const enteredNumber = getEnteredNumber();
    const prevResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', prevResult, enteredNumber);
    writeToLog('ADD', prevResult, enteredNumber, currentResult);
}

function sub() {
    const enteredNumber = getEnteredNumber();
    const prevResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', prevResult, enteredNumber);
    writeToLog('SUB', prevResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getEnteredNumber();
    const prevResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', prevResult, enteredNumber);
    writeToLog('MUL', prevResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getEnteredNumber();
    const prevResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', prevResult, enteredNumber);
    writeToLog('DIVIDE', prevResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);