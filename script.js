
const load = () => {
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener("click", () => {
        const header = document.getElementById("header");
        header.classList.toggle('active');        
    });
};
window.onload = load();