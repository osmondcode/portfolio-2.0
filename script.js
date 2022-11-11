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

// let circularProgress = document.querySelector('.circular-progress'),
//     progressValue = document.querySelector('.progress-value');

// let progressStartValue = 0,
//     progressEndValue = 95,
//     speed = 50;

// let progress = setInterval(() => {
//     progressStartValue++;

//     progressValue.textContent = `${progressStartValue}%`
//     circularProgress.style.background = `conic-gradient(#fdca50 ${progressStartValue * 3.6}deg, #111 0deg`

    

//     if(progressStartValue == progressEndValue){
//         clearInterval(progress)
//     }
// }, speed);
