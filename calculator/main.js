let btnNumber = document.querySelectorAll('.btn_number'),
    btnOperation = document.querySelectorAll('.btn_operation'),
    btnClear = document.getElementById('clear'),
    btnDot = document.getElementById('dot'),
    btnResult = document.getElementById('result'),
    btnDelete = document.getElementById('delete'),
    displayNum = document.querySelector('.display__numbers'),
    displayFormula = document.querySelector('.display__formula'),
    memoryCurrentNumber = 0,
    memoryNewNumber = false,
    MemoryPendingOperation = '';



    


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


btnResult.addEventListener("click", pressResult);
    
btnClear.addEventListener("click", pressClear);

btnDelete.addEventListener("click", pressDelete);

btnDot.addEventListener("click", pressDot);


  




function pressNumber(num) {
  if (memoryNewNumber === true) {
      displayNum.value = num;
      memoryNewNumber = false;
  } else {
    if(displayNum.value === "0") {
      displayNum.value = num;
    } else {
      displayNum.value += num;
    };
  };

}

function pressOperation(symbol) {
  let localOperationMemory = displayNum.value;
        
        if(memoryNewNumber && MemoryPendingOperation !== "=") {
          displayNum.value = memoryCurrentNumber;
        } else {
            memoryNewNumber = true;
            if (MemoryPendingOperation === "+") {
                memoryCurrentNumber += +localOperationMemory;  
            } else if (MemoryPendingOperation === "-") {
                memoryCurrentNumber -= +localOperationMemory;  
            } else if (MemoryPendingOperation === "*") {
                memoryCurrentNumber *= +localOperationMemory;  
            } else if (MemoryPendingOperation === "/") {
                memoryCurrentNumber /= +localOperationMemory;  
            } else {
                memoryCurrentNumber = +localOperationMemory;  
            }
            displayNum = memoryCurrentNumber;
            MemoryPendingOperation = symbol;
        };
  
}

function pressResult() {
  console.log('click result');
  
}

function pressDot() {
  console.log("Клик по dot");
  
}

function pressClear() {
  console.log("Клик по clear");
  
}

function pressDelete() {
  console.log("Клик по delete");
  
}