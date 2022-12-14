let previousNum, currentNum, operator;

const add = (previousNum, currentNum) => previousNum + currentNum;
const subtract = (previousNum, currentNum) => previousNum - currentNum;
const multiply = (previousNum, currentNum) => previousNum * currentNum;
const divide = (previousNum, currentNum) => previousNum / currentNum;

const operate = (operator, previousNum, currentNum) => {
    switch(operator) {
        case "add":
            return add(previousNum, currentNum);
            break;
        case "subtract":
            return subtract(previousNum, currentNum);
            break;
        case "multiply":
            return multiply(previousNum, currentNum);
            break;
        case "divide":
            return divide(previousNum, currentNum);
    }
}