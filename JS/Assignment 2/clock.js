var hourdisplay = document.getElementById("gethour");
var minutedisplay = document.getElementById("getminute");
var seconddisplay = document.getElementById("getsecnd");
var displayTPEl = document.getElementById("timeperiod");
var greetingEl = document.getElementById("greet");

function digitalClock(){
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    var period = "AM";
    var hour12 = hour;

    if(hour === 0){
        hour12 = 12;
        period = "AM";
    } else if(hour === 12){
        hour12 = 12;
        period = "PM";
    } else if(hour > 12){
        hour12 = hour - 12;
        period = "PM";
    } else {
        period = "AM";
    }


    var hourStr;
    if(hour12 < 10){
        hourStr = "0" + String(hour12);
    } else {
        hourStr = String(hour12);
    }

    var minStr;
    if(min < 10){
        minStr = "0" + String(min);
    } else {
        minStr = String(min);
    }

    var secStr;
    if(sec < 10){
        secStr = "0" + String(sec);
    } else {
        secStr = String(sec);
    }
    

    var greetText = "";
    if(period === "AM"){
        greetText = "Good Morning! 🌞";
    } else { // PM
        if(hour12 >= 1 && hour12 <= 4){
            greetText = "Good Afternoon! ☀️";
        } else if(hour12 >= 5 && hour12 <= 8){
            greetText = "Good Evening! 🌇";
        } else {
            greetText = "Good Night! 🌙";
        }
    }

    hourdisplay.innerText = hourStr;
    minutedisplay.innerText = minStr;
    seconddisplay.innerText = secStr;
    displayTPEl.innerText = period;
    if(greetingEl) greetingEl.innerText = greetText;
}
digitalClock();
setInterval(digitalClock, 1000);

function currentDate(){
    var date = new Date();
    var dayname = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = date.getDate();
    var daynames = dayname[date.getDay()];
    var monthnames = monthname[date.getMonth()];
    var year = date.getFullYear();
   

    var fulldate = daynames + "  " + day + "  " + monthnames + "  " + year;
    document.getElementById("date").innerText = fulldate;
    

}
currentDate();
