
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