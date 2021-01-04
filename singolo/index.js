console.log('hello');

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

  tags.forEach((tags) => {
    tags.classList.remove('tag_selected');
    tags.classList.add('tag_bordered');
  })
   }


const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove('tag_bordered');
  clickedTag.classList.add('tag_selected');
}