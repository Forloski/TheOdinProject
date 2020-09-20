/* eslint-disable require-jsdoc */

function createNumberButtonListeners() {
  const numButtons = document.querySelectorAll('.numberButton');
  numButtons.forEach((element) => {
    element.addEventListener('click', function(e) {
      if (checkTopForEqual()) {
        clearTopDisplay();
        clearBotDisplay();
      }
      if (checkTopForOperator() && checkBotNumberEqualsTop()) {
        clearBotDisplay();
        pushNumberToDisplay(element.innerHTML);
      } else {
        pushNumberToDisplay(element.innerHTML);
      }
    });
  });
}

function createClearButtonListeners() {
  buttonBackspace.addEventListener('click', function(e) {
    clearLastEntry();
    if (botDisplay.innerHTML === '') botDisplay.innerHTML = '0';
  });
  buttonCE.addEventListener('click', function(e) {
    if(checkTopForEqual()) clearTopDisplay();
    clearBotDisplay();
  });
  buttonC.addEventListener('click', function(e) {
    clearBotDisplay();
    clearTopDisplay();
  });
}

function createDotButtonListeners() {
  buttonDot.addEventListener('click', function(e) {
    pushDotToDisplay();
  });
}

function createOperatorButtonListeners() {
  const operatorButtons = document.querySelectorAll('.operatorButton');
  // console.log(operatorButtons);
  operatorButtons.forEach((element) => {
    element.addEventListener('click', function(e) {
      if (checkTopForEqual()) {
        clearTopDisplay();
      }
      if (!checkTopForOperator()) {
        pushOperatorToDisplay(element.innerHTML);
        pushBotDisplayToTop();
      } else {
        pushEqualToDisplay();
        calculate();
      }
    });
  });
}

function createEqualButtonListeners() {
  buttonEqual.addEventListener('click', function(e) {
    if (checkTopForOperator() && !checkTopForEqual()) {
      pushEqualToDisplay();
      calculate();
    }
  });
}

function createNegButtonListeners() {
  buttonNeg.addEventListener('click', function(e) {
    pushNegToDisplay();
  });
}

function createButtonListeners() {
  createClearButtonListeners();
  createNumberButtonListeners();
  createDotButtonListeners();
  createOperatorButtonListeners();
  createEqualButtonListeners();
  createNegButtonListeners()
}

function calculate() {
  const elements = topDisplay.innerHTML.split(' ');
  switch (elements[2]) {
    case '+':
      botDisplay.innerHTML = sum(elements[1], elements[3]);
      break;
    case '-':
      botDisplay.innerHTML = minus(elements[1], elements[3]);
      break;
    case 'x':
      botDisplay.innerHTML = multiply(elements[1], elements[3]);
      break;
    case '÷':
      botDisplay.innerHTML = divide(elements[1], elements[3]);
      break;
  }
}

// using *1 to force string into number

function sum(a, b) {
  return a*1 + b*1;
}

function minus(a, b) {
  return a*1 - b*1;
}

function multiply(a, b) {
  return a*1 * b*1;
}

function divide(a, b) {
  return a*1 / b*1;
}

function pushNegToDisplay() {
  if (botDisplay.innerHTML*1 > 0) {
    botDisplay.innerHTML = `${botDisplay.innerHTML*(-1)}`;
  } else if (botDisplay.innerHTML*1 < 0) {
    botDisplay.innerHTML = `${botDisplay.innerHTML*(-1)}`;
  }
}

function pushEqualToDisplay() {
  topDisplay.innerHTML = `${topDisplay.innerHTML} ${botDisplay.innerHTML} =`;
}

// uses 10 to put number after dot
function pushDotToDisplay() {
  if (!checkBotDisplayLength(10) &&
    !botDisplay.innerHTML.includes('.') &&
    !checkBotDisplayNull()) {
    botDisplay.innerHTML = `${botDisplay.innerHTML}.`;
  }
}

// uses 11 for max isplay size
function pushNumberToDisplay(number) {
  if (checkBotDisplayLength(11)) {
    return;
  } else if (botDisplay.innerHTML != '0') {
    botDisplay.innerHTML = botDisplay.innerHTML*1 + `${number}`;
  } else {
    botDisplay.innerHTML = `${number}`;
  }
}

function pushBotDisplayToTop() {
  topDisplay.innerHTML = `${topDisplay.innerHTML} ${botDisplay.innerHTML}`;
  clearLastEntry();
  clearLastEntry();
}

function pushOperatorToDisplay(operator) {
  botDisplay.innerHTML = `${botDisplay.innerHTML} ${operator}`;
}

function clearBotDisplay() {
  botDisplay.innerHTML = '0';
}

function clearTopDisplay() {
  topDisplay.innerHTML = '';
}

function clearLastEntry() {
  let length = botDisplay.innerHTML.length;
  botDisplay.innerHTML = botDisplay.innerHTML.slice(0, length-1);
}

function checkBotDisplayLength(length) {
  return (botDisplay.innerHTML.length > length) ? true : false;
}

function checkBotDisplayNull() {
  return (botDisplay.innerHTML === '') ? true : false;
}

function checkBotNumberEqualsTop() {
  const checker = topDisplay.innerHTML.slice(1, topDisplay.innerHTML.length-2);
  return (checker === botDisplay.innerHTML) ? true : false;
}

function checkTopForOperator() {
  const operators = ['÷', '+', '-', 'x'];
  let operatorOnTop = false;

  operators.forEach((element) => {
    operatorOnTop = (topDisplay.innerHTML.includes(element)) ? element :
      operatorOnTop || false;
  });
  return operatorOnTop;
}

function checkTopForEqual() {
  return topDisplay.innerHTML.includes('=') ? true : false;
}


createButtonListeners();
