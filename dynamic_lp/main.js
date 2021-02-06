let time = document.querySelector('time');


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



showTime();
changeBg();