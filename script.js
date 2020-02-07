/* const toggle = () => {
    //const header = document.getElementById("header");
    //header.classList.toggle('active');
    const link = document.querySelector('header ul li a');
    link.toggleAttribute
} */
/* const toggle = document.querySelector('.toggle');

toggle.addEventListener("click", function(){
    toggle.classList.add('active');
}); */

/* window.onload = function() {
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener("click", function(){
    toggle.classList.add('active');
});
  }; */
const load = () => {
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener("click", () => {
        // if (!toggle.classList.contains('active')) {
        //     toggle.classList.add('active');
        // } else {
        //     toggle.classList.remove('active');
        // }
        const header = document.getElementById("header");
        header.classList.toggle('active');
        
    });
};

window.onload = load();