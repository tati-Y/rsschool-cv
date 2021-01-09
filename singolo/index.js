console.log('hello');

window.onload = function() {
  console.log('hello u');
  addTagsClickHandler();
  //replacePortfolio();
  removePortfolioWhenClickTag();
}

//click tags

const addTagsClickHandler = () => {
  document.querySelector('.portfolio__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickedTag = e.target;
      removeSelectedTag();
      selectClickedTag(clickedTag);
      //replacePortfolio();
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

const removePortfolioWhenClickTag = () => {
  document.querySelector('.portfolio__tags').addEventListener('click', () => {
          replacePortfolio();
    })      
}

const replacePortfolio = () => {
  let pics = document.querySelectorAll('.portfolio-container .pic');
  //shuffle(pics);
  //let lastElement = pics.shift();
 // pics.push(pics.shift());
  pics.sort((a,b) => 0.5 - Math.random());
  console.log('ku');
}

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

function closeBurgerMenu() {
  let burgerActive = document.querySelector('.burger-menu');
  burgerActive.classList.remove('burger-menu_active');
  
}

document.querySelector('.burger-menu__button').onclick = openBurgerMenu;
document.querySelector('.burger-menu__nav').onclick = openBurgerMenu;
document.querySelector('.burger-menu__overlay').onclick = openBurgerMenu;








