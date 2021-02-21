let panels = document.querySelectorAll('.panel');
       
    panels.forEach(panel => {
      panel.addEventListener('click', (e) => {
        if (e.target.classList.contains('open')) {
          e.target.classList.remove('open');
        } else {
          removeOpen();
          e.target.classList.add('open');
        }        
      });
    });
    
    function removeOpen() {     
      panels.forEach(tag => {
         tag.classList.remove('open');                    
       });
    }
