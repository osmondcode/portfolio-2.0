let bars = document.querySelector(".hamburger");
let nav = document.querySelector(".get-in-touch");

function miniNav(){
    if(nav.style.display === 'none'){
        nav.style.display = 'flex';
    } else{
        nav.style.display = 'none';
    }
}

// HTML PROGRESSION

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.opacity = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1, 50))
    }, 3000)
}

init()