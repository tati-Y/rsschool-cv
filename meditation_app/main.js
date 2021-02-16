let song = document.querySelector('.song'),
    video = document.querySelector('.video'),
    musicBtn = document.querySelectorAll(".music__btn"),
    musicBox = document.querySelector(".music__buttons"),
    text = document.querySelector(".text"),
    videoDefault = "./video/default-black.mp4",
    timeBtn = document.querySelectorAll(".time__btn"),
    timeBox = document.querySelector(".time__buttons"),
    totalTimeSec = 300,
    timeDisplay = document.querySelector(".time");

        
// select music and video    

    function addBtnsClickHandler() {
      musicBox.addEventListener('click', (e) => { 
        e.preventDefault();       
        if (e.target.classList.contains('no_active')) {
          removeSelectedBtn();
          e.target.classList.remove('no_active');           
          e.target.classList.add('active');
          text.style.display = "none";
          selectMusic(e.target); 
          changeTime(0, totalTimeSec, e.target);                
        } 
        else {
          e.target.classList.remove('active'); 
          e.target.classList.add('no_active'); 
          selectDefaultMusic();                  
        }          
      });
    } 

    function removeSelectedBtn() {     
      musicBtn.forEach(tag => {
         tag.classList.remove('active'); 
         tag.classList.add('no_active');            
       });
    } 

    function selectMusic(m) {
        song.src = m.getAttribute("data-sound");
        video.src = m.getAttribute("data-video");        
        //checkPlaying();
        song.play();
        video.play();               
    }
    
    function selectDefaultMusic() {
      video.src = videoDefault;
      text.style.display = "block";
      video.play();
      song.pause();
      clearTime();      
    }

    addBtnsClickHandler();
    selectDefaultMusic();
    
// select time

  function addBtnsTimeClickHandler() {
    clearTime();
    timeBox.addEventListener('click', (e) => { 
      e.preventDefault();       
      if (e.target.classList.contains('time_no_active')) {
        removeSelectedBtnTime();
        e.target.classList.remove('time_no_active');           
        e.target.classList.add('time_active');
        
        showTimeDisplay(e.target);                 
      } 
     /* else {
        e.target.classList.remove('time_active'); 
        e.target.classList.add('time_no_active');                     
      } */         
    });
  } 

  function removeSelectedBtnTime() {     
    timeBtn.forEach(tag => {
      tag.classList.remove('time_active'); 
      tag.classList.add('time_no_active');            
    });
  } 
  
  addBtnsTimeClickHandler();


// time display

   function showTimeDisplay(t) {
    totalTimeSec = t.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(totalTimeSec / 60)}:${addZero(Math.floor(totalTimeSec % 60))}`;
  } 

   function addZero(z) {    
      return (+z < 10) ? '0' + z : z;    
  }

   function changeTime(from, to, m) {    
    let current = from;

    let timerId = setInterval(function() {
      let elapsed = totalTimeSec - current;
      let seconds = Math.floor(elapsed % 60);
      let minutes = Math.floor(elapsed / 60);
      timeDisplay.textContent = `${minutes}:${addZero(seconds)}`;
      if (current == to || m.classList.contains('no_active')) {
        clearInterval(timerId);

        clearTime();          
        m.classList.remove('active'); 
        m.classList.add('no_active');  
        video.pause();
        song.pause();        
        selectDefaultMusic();
      }
      current++;
      }, 1000);
    }

    function clearTime() {   
      timeBtn.forEach(tag => {
        if (tag.classList.contains('time_active')) {
          totalTimeSec = tag.getAttribute("data-time");
          timeDisplay.textContent = `${Math.floor(totalTimeSec / 60)}:${addZero(Math.floor(totalTimeSec % 60))}`;
        } 
      });
    }    
   
    

    

  /*function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // использование:
  printNumbers(5, 10);*/   

   




/*const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function() {
  checkPlaying(song);
});

replay.addEventListener("click", function() {
    restartSong(song);
    
  });


const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")

}

timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};*/