let time = document.querySelector('.time'),
    greeting = document.querySelector('.greeting'),
    plansName = document.querySelector('.plans_name'),
    plansText = document.querySelector('.plans_text'),
    plan = document.querySelector('.input'),
    planBtn = document.querySelector('.input_button'),
    clearAllBtn = document.querySelector('.clear_all');
    

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
    if (name == null) {
      name = 'Friend';
    }
    localStorage.setItem('name', `${name[0].toUpperCase() + name.slice(1).toLowerCase()}`);
  } else {
    name = localStorage.getItem('name');
  }
  
  plansName.textContent = `${name[0].toUpperCase() + name.slice(1).toLowerCase()}'s plans:`;

  showGreeting(name);
}

// set plans to local storage
function setPlans(n) {
  
      
  if (plan.value === '') {
    alert('write something!!!');
  } else {    
    localStorage.setItem(`plan${n}`, `${plan.value}`);
    
  }

}

/*planBtn.addEventListener('click', function(e) {
  //e.target.value++;
  setPlans(e.target.value); 
  //planBtn.value = `${e.target.value + 1}`
  planBtn.setAttribute('value', `${e.target.value + 1}`) 
})*/

planBtn.addEventListener('click', function(e) {
 /* let n = planBtn.value;
  setPlans(n); 
  
  planBtn.setAttribute('value', `${+n + 1}`) ;*/
  
    
  e.target.value++;
  
  alert(planBtn.value);
})


// clear local storage
function clearAll() {
  localStorage.clear();
  setName();
}

clearAllBtn.addEventListener('click', clearAll);

//planBtn.addEventListener('click', setPlans);

showTime();
changeBg();
setName();
//setPlans();





// Get Name
/*function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);*/