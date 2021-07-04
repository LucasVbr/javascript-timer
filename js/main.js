var htmlTimer = document.getElementById("timer");

var timer = setInterval(timerLoop, 1000);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let time = parseInt(urlParams.get('time'))


function timerLoop() {
    htmlTimer.innerHTML = convertSecMin(time);
    time--;
    if(time < 0) {
        clearInterval(timer)
        htmlTimer.style.color = "red";
    }
}

function convertSecMin(value) {
    let seconds = Math.floor(value % 60);
    let minuts = Math.floor(value / 60);
    return `${convertDigits(minuts)}:${convertDigits(seconds)}` 
}

function convertDigits(number) {
    return number.toLocaleString('en-US', {
        minimumIntegerDigits : 2,
        useGrouping : false});
}