const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-wrapper');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false;
    }
})