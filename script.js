function showMessage() {
    alert("Thank you for visiting my personal website!");
}

function showTime() {
    var today = new Date();
    var clock = document.getElementById("clock");

    if (clock) {
        clock.innerHTML = today.toLocaleTimeString();
    }
}

function showDate() {
    var today = new Date();
    var date = document.getElementById("date");

    if (date) {
        date.innerHTML = today.toDateString();
    }
}

window.onload = function() {

    if (document.body.id == "home") {
        showMessage();
    }

    showDate();
    showTime();
    setInterval(showTime, 1000);
}