var hourdisplay = document.getElementById("gethour");
var minutedisplay = document.getElementById("getminute");
var seconddisplay = document.getElementById("getsecnd");
var displayTP = document.getElementById("timeperiod");
var timeperiod = "";
var greetingtext = document.getElementById("greet");
var greet = "";
function digitalClock(){
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();


    if(hour === 0 ){
        hour = 12;
        timeperiod = "AM";
    }
    else if(hour >= 1 && hour <= 11){
        timeperiod = "AM";
    }
    else if(hour == 12){
        timeperiod = "PM";
    }
    else{
        hour -= 12;
        timeperiod = "PM";
    }


    if(hour < 10){
        hour = "0" + hour;
    }
    else{
        hour = hour;
    }
    if(min < 10){
        min = "0" + min;
    }
    else{
        min = min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    else{
        sec = sec;
    }

    if(timeperiod === "AM"){
        greet = "Good Morning! 🌞";
    }
    if(timeperiod === "PM" && hour >= 1 && hour <= 4){
        greet = "Good Afternoon! ☀️";
    }
    if(timeperiod === "PM" && hour >= 5 && hour <= 8){
        greet = "Good Evening! 🌇";
    }
    if(timeperiod === "PM" && hour >= 9 && hour <= 11){
        greet = "Good Night! 🌙";
    }    

    hourdisplay.innerText = hour;
    minutedisplay.innerText = min;
    seconddisplay.innerText = sec;
    displayTP.innerText = timeperiod;
    greetingtext.innerText = greet;
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
