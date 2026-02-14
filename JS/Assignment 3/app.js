var bodycolor = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black"];
var maindiv = document.getElementById("main");
var guesingdiv = document.getElementById("guesing_color");
var guessdiv = document.getElementById("guesscolor");
var span = document.getElementById("score_span");
var head = document.getElementById("head");

// guesingdiv style
guesingdiv.style.top = "0";
guesingdiv.style.width = "100%";
guesingdiv.style.height = "120px";
guesingdiv.style.display = "flex";
guesingdiv.style.justifyContent = "space-around";
guesingdiv.style.alignItems = "center";
guesingdiv.style.gap = "20px";
guesingdiv.style.marginBottom = "10px";
guesingdiv.style.padding = "10px";
guesingdiv.style.position = "fixed";
guesingdiv.style.backgroundColor = "lightblue";

// maindiv style
maindiv.style.display = "flex";
maindiv.style.flexWrap = "wrap";
maindiv.style.justifyContent = "center";
maindiv.style.alignItems = "center";
maindiv.style.gap = "20px";
maindiv.style.marginTop = "180px";




function bgcolor() {
    var randomcolor = Math.floor(Math.random() * bodycolor.length);
    return bodycolor[randomcolor];
}

var randomcolor = bgcolor();
// guessdiv style
guessdiv.style.width = "100px";
guessdiv.style.height = "100px";
guessdiv.style.margin = "5px";
guessdiv.style.border = "2px solid black";
guessdiv.style.borderRadius = "10px";
guessdiv.style.backgroundColor = randomcolor;
guessdiv.innerText = randomcolor;
guessdiv.style.display = "flex";
guessdiv.style.justifyContent = "center";
guessdiv.style.alignItems = "center";
guessdiv.style.color = "white";
guessdiv.style.fontSize = "20px";

// span style
span.style.fontSize = "30px";
span.style.color = "black";

for (var i = 0; i < 21; i++) {

    var newrandomcolor = bgcolor();

    var submaindiv2 = document.createElement("div");
    submaindiv2.innerHTML = "Hello World"
    submaindiv2.style.color = "white"
    submaindiv2.style.fontSize = "30px"
    submaindiv2.style.textAlign = "center"
    submaindiv2.style.marginTop = "10px"
    submaindiv2.style.padding = "20px"
    submaindiv2.style.border = "2px solid black"
    submaindiv2.style.borderRadius = "10px"
    submaindiv2.style.width = "200px"
    submaindiv2.style.height = "200px"
    submaindiv2.style.display = "flex"
    submaindiv2.style.justifyContent = "center"
    submaindiv2.style.alignItems = "center"
    submaindiv2.style.backgroundColor = newrandomcolor;
    submaindiv2.innerText = newrandomcolor;
    maindiv.appendChild(submaindiv2);
}

function refreshPage() {
    window.location.reload();
    
}

var score = 0;
var attemptsCounter = 0;
var Gameschedule = "New Game";

maindiv.addEventListener("click", function (event) {

    if (Gameschedule == "Game Completed") {
        alert("Game Completed! Please Refresh The Page To Play Again");
        setTimeout(refreshPage, 1000);
        return;
    }
    else if (Gameschedule == "Game Over") {
        alert("Game Over! Please Refresh The Page To Play Again");
        setTimeout(refreshPage, 1000);
        return;
    }


    if (event.target.style.backgroundColor === guessdiv.style.backgroundColor) {
        score++;
        attemptsCounter++;

        if (attemptsCounter === 5) {
            span.innerHTML = "Congrats You Got It! <br> Your score: " + score;
            Gameschedule = "Game Completed";
            return;
        }
        else {
            var newcolor = bgcolor();
            var color = bgcolor();
            guessdiv.style.backgroundColor = color;
            guessdiv.innerText = color;
            event.target.style.backgroundColor = newcolor;
            event.target.innerText = newcolor;
            span.innerHTML = "Correct! <br> Your score is:" + score;
        }
    }
    else {
        score--;
        if (score == 4 || score == 3 || score == 2) {
            span.innerHTML = "You have Missed the Color <br> Your score is:" + score;
        }
        else if (score == 1) {
            span.innerHTML = "You Have Only 1 Chance: <br> Your Score is:" + score;
        }
        else {
            span.innerHTML = "Game Over! <br> Your score is:" + score;
            Gameschedule = "Game Over";
            return;
        }
    }
})