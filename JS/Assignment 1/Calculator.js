var input = document.getElementById("input");
var output = document.getElementById("output");

function Enterdata(entrdata){
    
    if(entrdata == "clear"){
        input.innerText = "";
        output.innerText = "0";
        return
    }

    if(entrdata == "backspace"){
        input.innerText = input.innerText.slice(0,-1);
        return
    }
    
    input.innerText += entrdata;
}
function calculator(){
    var result = eval(input.innerText);

    if(Number.isInteger(result)){
        output.innerText = result;
    } else {
        output.innerText = result.toFixed(2);
    }
}

