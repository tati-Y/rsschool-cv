let time = document.querySelector('.time'),
    greeting = document.querySelector('.greeting'),
    plansName = document.querySelector('.plans_name'),
    plansText = document.querySelector('.plans_text'),
    plan = document.querySelector('.input'),
    planBtn = document.querySelector('.input_button'),
    clearAllBtn = document.querySelector('.clear_all'),
    clearPlansBtn = document.querySelector('.clear_plans');
    

// show time
function showTime() {

  let now = new Date(),
    hour = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds();

    time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  
    setTimeout(showTime, 1000);
}

function addZero(n) {
  return (+n < 10) ? '0' + n : n;
}

// change background
function changeBg() {
  let now = new Date(),
    hour = now.getHours();
    
  if (hour < 4) {
    document.body.style.backgroundImage = "url(img/night.jpg)";        
  } else if (hour < 12) {
    document.body.style.backgroundImage = "url(img/morning.jpg)";    
  } else if (hour < 17){
    document.body.style.backgroundImage = "url(img/day.jpg)";    
  } else {
    document.body.style.backgroundImage = "url(img/night.jpg)";    
  }
}

// show greeting
function showGreeting(n) {
  let now = new Date(),
      hour = now.getHours();

      if (hour < 4) {
        greeting.textContent = `Good Evening, ${n[0].toUpperCase() + n.slice(1).toLowerCase()}!`;       
      } else if (hour < 12) {
        greeting.textContent = `Good Morning, ${n[0].toUpperCase() + n.slice(1).toLowerCase()}!`;        
      } else if (hour < 17){
        greeting.textContent = `Good Afternoon, ${n[0].toUpperCase() + n.slice(1).toLowerCase()}!`;        
      } else {
        greeting.textContent = `Good Evening, ${n[0].toUpperCase() + n.slice(1).toLowerCase()}!`;
      }  
     
}

// set name to local storage
function setName() {
  let name;
  if (localStorage.getItem('name') === null) {
    name = prompt("Hi! What's your name?");
    if (name == null || name === '') {
      name = 'Friend';
    }
    localStorage.setItem('name', `${name[0].toUpperCase() + name.slice(1).toLowerCase()}`);
  } else {
    name = localStorage.getItem('name');
  }
  
  plansName.textContent = `${name[0].toUpperCase() + name.slice(1).toLowerCase()}'s plans:`;

  showGreeting(name);
}

showTime();
changeBg();
setName();

// set plans to local storage
let ul = document.querySelector('ul');

let plansArray = localStorage.getItem('plans') ? JSON.parse(localStorage.getItem('plans')) : [];

localStorage.setItem('plans', JSON.stringify(plansArray));

let data = JSON.parse(localStorage.getItem('plans'));

function makeLi(text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

planBtn.addEventListener('click', function(e) {
  e.preventDefault();
  plansArray.push(plan.value);
  if (plansArray.length > 13) {
    alert('Hey! Too many plans! Take it easy! ;)')
  }
  localStorage.setItem('plans', JSON.stringify(plansArray));
  makeLi(plan.value);
  plan.value = '';
})

data.forEach(item => {
  makeLi(item);
})

// clear buttons
clearAllBtn.addEventListener('click', function() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  plansArray = [];
  setName();
})

clearPlansBtn.addEventListener('click', function() {
  localStorage.removeItem('plans');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  plansArray = [];  
})