
let operator = null;
let lastNum = 0;
let actualNum = 0;
let equals = false;;
function calc(ev) {
    let button = ev.textContent;

    if (button === "," || button === "0" || button === "1" || button === "2" || button === "3" || button === "4" || button === "5" || button === "6" || button === "7" || button === "8" || button === "9") {
        let DOMdisplay = document.getElementById("display");
        setDisplay(button);
        actualNum = DOMdisplay.textContent;
    } else if (button === "+" || button === "-" || button === "x" || button === "%" || button === "÷") {
        let DOMdisplay = document.getElementById("display");
        lastNum = DOMdisplay.textContent;
        operator = button;
        DOMdisplay.textContent = "0";
        equals = false;
    } else if (button === "AC") {
        let DOMdisplay = document.getElementById("display");
        DOMdisplay.textContent = 0;
        operator = null;
        lastNum = 0;
        equals = false;
    } if (button === "+/-") {
        let DOMdisplay = document.getElementById("display");
        if (Number(DOMdisplay.textContent) > 0) {
            DOMdisplay.textContent = "-" + DOMdisplay.textContent;
        } else if (Number(DOMdisplay.textContent) < 0) {
            DOMdisplay.textContent = DOMdisplay.textContent.replace("-", "");
        }
        actualNum = DOMdisplay.textContent;
        equals = false;
    } else if (button === "=") {
        let DOMdisplay = document.getElementById("display");
        let result = operar(Number(lastNum), Number(actualNum), operator);
        DOMdisplay.textContent = result;
        lastNum = DOMdisplay.textContent;
        equals = true;
    }
}

function setDisplay(num) {
    let DOMdisplay = document.getElementById("display");
    if (num === ",") {
        DOMdisplay.textContent = DOMdisplay.textContent + ".";
    } else if (equals || DOMdisplay.textContent === "0") {
        DOMdisplay.textContent = num;
        equals = false;
    } else {
        DOMdisplay.textContent = DOMdisplay.textContent + num;
    }
}
function operar(num1, num2, op) {
    let result = 0;
    if (op === "x") {
        result = num1 * num2;
    } else if (op === "%") {
        result = num1 % num2;
    } else if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "÷") {
        result = num1 / num2;
    }

    return result
}