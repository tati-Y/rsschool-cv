//keyboard
window.addEventListener('keydown', (e) => {
  let audio = document.querySelector(`audio[data-key="${e.code}"]`);  
  let key = document.querySelector(`div[data-key="${e.code}"]`);
  if (!audio) return;

  key.classList.add('active');
  audio.currentTime = 0;
  audio.play();
  setTimeout(removeSelectedBtn, 500);
});

//click
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    e.target.classList.add('active');  
    let k = e.target.getAttribute("data-key"); 
    let audios = document.querySelectorAll('audio');
    let sound = document.querySelector('.sound');

    audios.forEach(tag => {         
      if (tag.getAttribute("data-key") === k) {
        sound.src = tag.getAttribute("data-sound");
        sound.play(); 
      }     
      });  

    setTimeout(removeSelectedBtn, 500);
  } 
});

function removeSelectedBtn() {     
  let keys = document.querySelectorAll('.key');
  keys.forEach(tag => {     
      tag.classList.remove('active');      
     });      
} 





/*function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);*/