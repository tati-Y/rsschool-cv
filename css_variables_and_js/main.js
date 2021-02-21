let buttonBox = document.querySelector(".buttons"),
button = document.querySelectorAll(".button"),
inputs = document.querySelectorAll("input"),
inputDiv = document.querySelectorAll(".inputs div");

//select properties with buttons
function getDataFromBtn() {
  buttonBox.addEventListener('click', (e) => {           
      let prop = e.target.getAttribute("data-prop");
      showProp(prop);        
  });
} 
getDataFromBtn();

function showProp(p) {
  let key = document.querySelector(`div[data-prop="${p}"]`);
  if (key.classList.contains('shown')) {
    return;
  } else {
    removeSelectedBtn();    
    key.classList.add('shown');  
  }   
}

function removeSelectedBtn() {     
  inputDiv.forEach(tag => {
     tag.classList.remove('shown'); 
     tag.classList.add('hidden');            
   });
}

//variables js
inputs.forEach(input => input.addEventListener("change", inputUpdate));
inputs.forEach(input => input.addEventListener("mousemove", inputUpdate));

function inputUpdate() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}