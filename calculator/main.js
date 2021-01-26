let btnNumber = document.querySelectorAll('.btn_number'),
    btnOperation = document.querySelectorAll('.btn_operation'),
    btnBrackets = document.querySelectorAll('.btn_bracket'),
    btnClear = document.getElementById('clear'),
    btnDot = document.getElementById('dot'),
    btnResult = document.getElementById('result'),
    btnDelete = document.getElementById('delete'),
    displayNum = document.querySelector('.display__numbers'),
    displayFormula = document.querySelector('.display__formula');
      


for (i=0; i < btnNumber.length; i++) {
    let number = btnNumber[i];
    number.addEventListener("click", function(e){
      pressNumber(e.target.innerText);
    }); 
};

for (i=0; i < btnOperation.length; i++) {
  let operation = btnOperation[i];
  operation.addEventListener("click", function(e){
    pressOperation(e.target.innerText);
  });  
};

for (i=0; i < btnBrackets.length; i++) {
  let bracket = btnBrackets[i];
  bracket.addEventListener("click", function(e){
    pressBracket(e.target.innerText);
  }); 
};


btnResult.addEventListener("click", pressResult);  
    
btnClear.addEventListener("click", pressClear);

btnDelete.addEventListener("click", pressDelete);

btnDot.addEventListener("click", pressDot);


let isOperatorPressed = false,
    isResultPressed = false;
    

function pressNumber(num) {
  displayFormula.value = displayFormula.value + num;
  displayNum.value = '=';
  isOperatorPressed = false;
  isResultPressed = false;
}
  
function pressOperation(symbol) {
  let symbOper = symbol;
  if (isOperatorPressed === false && !!displayFormula.value === true){
    displayFormula.value = displayFormula.value + symbol;
    isOperatorPressed = true;
  }  
  if (symbOper === '-' && !!displayFormula.value === false){
    displayFormula.value = displayFormula.value + symbOper;
    isOperatorPressed = true;
  }
}

function pressBracket(bracket) {
  let symbBr = bracket;
  if (symbBr === '(' && isOperatorPressed === true || !!displayFormula.value === false){
    displayFormula.value = displayFormula.value + bracket;
    isOperatorPressed = true;
  }  
  if (symbBr === ')' && isOperatorPressed === false){
    displayFormula.value = displayFormula.value + bracket;
    isOperatorPressed = false;
  }
}

function pressResult() {
  if (isResultPressed === false){
  let result = eval(displayFormula.value);
  if (result > 99999999){
    displayNum.value = result.toExponential(3);
  } else
  if (Number.isInteger(result)) {
    displayNum.value = result;
  } else {
    displayNum.value = result.toFixed(4);
  }
  displayFormula.value = result;
  isResultPressed = true;
  
}
}

function pressDot() {
  let isDot = /\./g;
  if (isOperatorPressed === false && isDot.test(displayFormula.value) === false){
  displayFormula.value = displayFormula.value + '.';  
  isOperatorPressed = true;
  }
}

function pressClear() {
  displayFormula.value = '';
  displayNum.value = '0';  
}

function pressDelete() {
  displayFormula.value = displayFormula.value.substring(0, displayFormula.value.length - 1);  
}





