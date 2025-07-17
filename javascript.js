const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const calcText = document.querySelector(".calc-text");
const equation = document.querySelector(".equation");

let calculatorString1 = "";
let calculatorString2 = "";
let operatorString = "";

//Event Listeners
numbers.forEach(function(num) {
    num.addEventListener("click", numberClick);
});

operators.forEach(function(op){
    op.addEventListener("click", operatorClick);
});

clear.addEventListener("click", clearCalc);

// Functions
function numberClick(event) {
    if(operatorString == "")
    {
        calculatorString1 += event.target.dataset.number;
        updateCalcText(calculatorString1);
        updateEquation();
    }
    else if(operatorString != "")
    {
        calculatorString2 += event.target.dataset.number;
        updateCalcText(calculatorString2);
        updateEquation();
    }
};

function operatorClick(event) {
    if(calculatorString1 == "") {
        operatorString = "";
        updateCalcText("EMPTY");
        updateEquation();
    }
    else {
        operatorString = event.target.dataset.op;
        updateCalcText(operatorString);
        updateEquation();
    }
}

function updateCalcText(newString)
{
    calcText.textContent = newString;
}

function updateEquation() {
    equation.textContent = calculatorString1 + " " + operatorString + " " + calculatorString2;
}

// Clear Function
function clearCalc(event)
{
    updateCalcText("EMPTY");
    calculatorString1 = "";
    calculatorString2 = "";
    operatorString = "";
    updateEquation();
}