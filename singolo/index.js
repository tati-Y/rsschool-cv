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

  for (let i = 0; i <shuffledArray.length; i++) {
    let img = document.createElement('img');
    img.src = shuffledArray[i];
    img.classList.add('pic');
    document.querySelector('.portfolio-container').appendChild(img);
  }    
}

document.querySelector('.portfolio__tags').onclick = replacePortfolio;

//simple slider

let images = document.querySelectorAll('.slider_image img');
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
document.querySelector('.container__arrow_right').onclick = slider;

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
  //clickedTag.classList.remove('tag_bordered');
  clickedMenu.classList.add('active');
}

addMenuClickHandler();






