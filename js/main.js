/* HTML contents */
var body = document.body;
var timerHTML = document.getElementById("timer");
var ding = document.getElementById("ding");

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
        body.style.backgroundColor = "red";
        timerHTML.style.color = "white";
        ding.play();
    }
}, 1000);