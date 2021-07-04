/* HTML contents */
var timerHTML = document.getElementById("timer");

/* GET url variable */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
time = getTimeUrl();

/* Set the timer */
let timer = new Timer(time)

let localTimer = setInterval(() => {
    timerHTML.innerHTML = timer.toString();
    timer.decrement();
    if(timer.getTime() < 0) {
        clearInterval(localTimer);
        timerHTML.style.color = "red";
    }
}, 1000);