window.addEventListener("load", function () {
    'use strict';
    var hourDisplay = document.getElementById("hours"),
        minuteDisplay = document.getElementById("minutes"),
        secDisplay = document.getElementById("seconds");
    function displayTime() {
        var current_time = new Date(),
            hh = current_time.getHours(),
            min = current_time.getMinutes(),
            sec = current_time.getSeconds();
        
        hourDisplay.innerHTML = hh < 10 ? ('0' + hh) : hh;
        minuteDisplay.innerHTML = min < 10 ? ('0' + min) : min;
        secDisplay.innerHTML = sec < 10 ? ('0' + sec) : sec;
    }
    setInterval(displayTime, "1000");
    displayTime();
    
});