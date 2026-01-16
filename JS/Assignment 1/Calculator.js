var input = document.getElementById("input");
var output = document.getElementById("output");
var myhistory = [];

function Enterdata(entrdata) {

    if (entrdata == "clear") {
        input.innerText = "";
        output.innerText = "0";
        return
    }

    if (entrdata == "backspace") {
        input.innerText = input.innerText.slice(0, -1);
        return
    }

    input.innerText += entrdata;
}
function calculator() {
    var result = eval(input.innerText);

    if (Number.isInteger(result)) {
        output.innerText = result;
    } else {
        output.innerText = result.toFixed(2);
    }
    myhistory.push(input.innerText + " = " + output.innerText);
}

function showtime() {
    var time = new Date();
    var presenttime = document.getElementById("time");
    var newtime = presenttime.innerText = time.toLocaleTimeString();
    return newtime;
}
showtime();
setInterval(showtime, 1000);

function toseemyhistory() {
    var historyDiv = document.getElementById("historyDiv");
    historyDiv.innerHTML = '';

    if (myhistory.length === 0) {
        historyDiv.innerText = "No History Available";
    } else {
        for (var i = 0; i < myhistory.length; i++) {
            historyDiv.innerHTML += myhistory[i] + "<br>";
        }
    }
}
