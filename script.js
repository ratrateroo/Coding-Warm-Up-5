
const toggler = (link) => {
    const withActive = document.getElementsByClassName('active');
        if (withActive.length > 0){
            withActive[0].classList.toggle('active');
        }
        link.classList.toggle('active');
}

const navlinks = document.querySelectorAll('header ul li a');
navlinks.forEach(link => {
    
    
    link.addEventListener("click", () => {
            toggler(link);
        });
});

const toggle = document.querySelector('.toggle');
toggle.addEventListener("click", () => {
    const header = document.getElementById("header");
    header.classList.toggle('active');        
});

window.addEventListener("scroll", () => {
    const navigationLinks = document.querySelectorAll('header ul li a');
    const fromTop = window.scrollY;
   
    navigationLinks.forEach(link => {
      const section = document.querySelector(link.hash);
     
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });