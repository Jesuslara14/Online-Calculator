//Global Use Variables

var resultPadDisplay = "";
var numberButtonArray = document.getElementsByClassName('numberInput');
var operatorButtonArray = document.getElementsByClassName('operatorInput');

//Update Display

setInterval(function(){
    document.getElementById('resultPad').innerHTML = resultPadDisplay;
}, 100);

//Set Event Listeners

for (var i = 0; i < numberButtonArray.length; i++){
    numberButtonArray[i].addEventListener('click', updateResultPadDisplay)
}

for (var i = 0; i < operatorButtonArray.length; i++){
    operatorButtonArray[i].addEventListener('click', updateResultPadDisplay)
}

document.getElementById('parenthesesInput').addEventListener('click', updateResultPadDisplay)

document.getElementById('parenthesesInput').addEventListener('click', function(){
    switch(this.innerHTML){
        case "(":
            this.innerHTML = ")";
        break;
        case ")":
            this.innerHTML = "(";
        break;
    }
})

document.getElementById('clearButton').addEventListener('click', function(){
    resultPadDisplay = ""
});

document.getElementById('deleteButton').addEventListener('click', function(){
    resultPadDisplay = resultPadDisplay.slice(0, -1);
});

document.getElementById('submitButton').addEventListener('click', function(){
    result = eval(resultPadDisplay);
    if (result == resultPadDisplay || result == "undefined"){
        resultPadDisplay = "Syntax Error";
    }else{
        resultPadDisplay = "" + result;
    }
});

//Functions

function updateResultPadDisplay(){
    if(resultPadDisplay == "Syntax Error"){
        resultPadDisplay = "";
    }
    resultPadDisplay = resultPadDisplay + this.innerHTML;
}