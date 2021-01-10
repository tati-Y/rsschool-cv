console.log('hello');

/*window.onload = function() {
  console.log('hello u');
  addTagsClickHandler();
  //replacePortfolio();
  removePortfolioWhenClickTag();
}*/

//click tags

const addTagsClickHandler = () => {
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

addTagsClickHandler();

//remove portfolio

const replacePortfolio = () => {
  let pics = document.querySelectorAll('.portfolio-container img');
  let picsArray = [];
  for (let i = 0; i <pics.length; i++) {
    picsArray[i] = pics[i].src;
    pics[i].remove();
  }

  let shuffledArray = picsArray.sort((a,b) => 0.5 - Math.random());

  for (let i = 0; i < shuffledArray.length; i++) {
    let img = document.createElement('img');
    img.src = shuffledArray[i];
    img.classList.add('pic');
    document.querySelector('.portfolio-container').appendChild(img);
  }    
}

document.querySelector('.portfolio__tags').onclick = replacePortfolio;

//simple slider (without flipping)

/*let images = document.querySelectorAll('.slider_image img');
let current = 0;

function slider() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0');
  }
  images[current].classList.remove('opacity0');
  
  if (current+1 === images.length) {
    current = 0;
  } else {
    current++;
  }
}

document.querySelector('.container__arrow_left').onclick = slider;
document.querySelector('.container__arrow_right').onclick = slider;*/

//slider with flipping

let slides = document.querySelectorAll('.slide');
  let slider = [];
  for (let i = 0; i <slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
  }
  

  let step = 0;
  let offset = 0; 
  
  function drawVisibleSlideToLeft() {
        let slide = document.createElement('img');
        slide.src = slider[step];
        slide.classList.add('slide');
        slide.style.left = offset*1020 + 'px';
        document.querySelector('.slider_image').appendChild(slide); 
        if (step+1 === slider.length) {
          step = 0;
        } else {
          step++;}
        //step++;
        offset = 1;               
  }
  drawVisibleSlideToLeft(); 

  function left() {
    drawVisibleSlideToLeft();
    let slides2 = document.querySelectorAll('.slide');
    let offset2 = 0;

    for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.left = offset2*1020 - 1020 +'px';
      offset2++;
    }

    setTimeout(function() {
      slides2[0].remove();
      draw();
      drawVisibleSlideToLeft();
    }, 1000);
}

  
function drawVisibleSlideToRight() {    
      let slide = document.createElement('img');
      slide.src = slider[step];
      slide.classList.add('slide');
      slide.style.left = offset*1020 + 'px';
      document.querySelector('.slider_image').appendChild(slide); 
      if (step+1 === slider.length) {
        step = 0;
      } else {
        step++;}
      //step++;
      offset = -1;
  }
  drawVisibleSlideToRight(); 

function right() {
    drawVisibleSlideToRight(); 
    let slides2 = document.querySelectorAll('.slide');
    let offset2 = 0;

    for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.left = offset2*(-1020) +1020 +'px';
      offset2++;
    }

    setTimeout(function() {
      slides2[0].remove()
      drawVisibleSlideToRight();
    }, 1000);
}

document.querySelector('.container__arrow_left').onclick = left;
document.querySelector('.container__arrow_right').onclick = right;

  

//burger-menu

function openBurgerMenu() {
  let burger = document.querySelector('.burger-menu');
  burger.classList.toggle('burger-menu_active');  
}

document.querySelector('.burger-menu__button').onclick = openBurgerMenu;
document.querySelector('.burger-menu__nav').onclick = openBurgerMenu;
document.querySelector('.burger-menu__overlay').onclick = openBurgerMenu;

//menu - change color of active item

const addMenuClickHandler = () => {
  document.querySelector('.navigation').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu')) {
      let clickedMenu = e.target;
      removeSelectedMenu();
      selectClickedMenu(clickedMenu);     
    }    
  })
}

const removeSelectedMenu = () => {
  let tags = document.querySelectorAll('.navigation .menu');
  tags.forEach(menu => {
    menu.classList.remove('active');
  })
}

const selectClickedMenu = (clickedMenu) => {
     clickedMenu.classList.add('active');
}

addMenuClickHandler();






