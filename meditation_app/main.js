let song = document.querySelector('.song'),
    video = document.querySelector('.video'),
    musicBtn = document.querySelectorAll(".music__btn"),
    musicBox = document.querySelector(".music__buttons");

    //console.log(video.src);

   
    
// change music and video

    /*musicBtn.forEach(sound => {
     sound.addEventListener("click", function() {
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");        
        checkPlaying();
      });
    });*/

   /*musicBtn.forEach(sound => {
      
        if (sound.classList.contains('active')) {
          song.src = e.target.getAttribute("data-sound");
         video.src = e.target.getAttribute("data-video");        
         checkPlaying();           
        }
      });       
    
     

    function checkPlaying()  {
      song.play();
      video.play();
    }*/
// show active music button

   /* function addBtnsClickHandler() {
      musicBox.addEventListener('click', (e) => {
        if (e.target.classList.contains('music__btn')) {
          let clickedBtn = e.target;
          removeSelectedBtn();
          selectClickedBtn(clickedBtn);      
        }
      });
    }    

    function removeSelectedBtn() {     
     musicBtn.forEach(tag => {
        tag.classList.remove('active'); 
        tag.classList.add('no_active');            
      });
    }
      

    function selectClickedBtn(clickedBtn) {      
      clickedBtn.classList.add('active');
      clickedBtn.classList.remove('no_active');
    }*/
    
    /*function addBtnsClickHandler() {
      musicBox.addEventListener('click', (e) => {
        removeSelectedBtn();
        if (e.target.classList.contains('music__btn')) {
          e.target.classList.toggle('active');
          e.target.classList.toggle('no_active');
          console.log(e.target.classList);
        }
      });
    }  */ 

    function addBtnsClickHandler() {
      musicBox.addEventListener('click', (e) => {        
        if (e.target.classList.contains('no_active')) {
          removeSelectedBtn();
          e.target.classList.remove('no_active'); 
          e.target.classList.add('active');
          selectMusic(e.target);                 
        } 
        else {
          e.target.classList.remove('active'); 
          e.target.classList.add('no_active');                   
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
        checkPlaying();
     }

    function checkPlaying()  {
      song.play();
      video.play();
    }


    addBtnsClickHandler();
    


      /*if (song.paused) {
        song.play();
        video.play();
        play.src = "./svg/pause.svg";
      } else {
        song.pause();
        video.pause();
        play.src = "./svg/play.svg";
      }*/
    


    /*const addTagsClickHandler = () => {
      document.querySelector('.portfolio__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
          let clickedTag = e.target;
          removeSelectedTag();
          selectClickedTag(clickedTag);      
        }    
      })
    }
    
    const removeSelectedTag = () => {
      let tags = document.querySelectorAll('.portfolio__tags .tag');
      tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');    
      })
    }
    
    const selectClickedTag = (clickedTag) => {
      clickedTag.classList.remove('tag_bordered');
      clickedTag.classList.add('tag_selected');
    }
    
    addTagsClickHandler();*/




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