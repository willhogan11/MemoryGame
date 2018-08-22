// Declare global Arrays that hold the values. We can access these at any stage later on.
const maxSize = 15;  
var randNumArr = [];
var usersGuesses = [];
var usersGuessesParsed = [];
var idArr = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "btn10", "btn11", "btn12", "btn13", "btn14", "btn15"];
var guessIds = ["guess1", "guess2", "guess3", "guess4", "guess5", "guess6", "guess7", "guess8", "guess9", "guess10", "guess11", "guess12", "guess13", "guess14", "guess15"];


function myFunction() {
    document.getElementById("usersGuess").style.visibility = "hidden";
}

// Calculate Unique Random List
function calcUniqueRandomNums(){
    document.getElementById("usersGuess").style.visibility = "hidden";
    while(randNumArr.length < maxSize){
        var randomnumber = Math.floor(Math.random()*50) + 1;
        if(randNumArr.indexOf(randomnumber) > -1) continue;
        randNumArr[randNumArr.length] = randomnumber;
    }
    for(var i = 0; i < maxSize; i++){
         document.getElementById(idArr[i]).innerText = randNumArr[i];
    }
    document.getElementById("startBtn").disabled = true;
    setTimer();
}


function setTimer() {
    var myVar = setTimeout(clearNumVisibility, 5000);
    var myVar2 = setTimeout(makeVisible, 5000);
}


function clearNumVisibility() {
    for(var i = 0; i < maxSize; i++){
        document.getElementById(idArr[i]).innerText = "";
    }
}

function makeVisible(){
    document.getElementById("usersGuess").style.visibility = "visible";
}


function parseValues(){
    usersGuesses = removeDuplicates(usersGuesses);

    for(var i = 0; i < maxSize; i++){
        usersGuesses[i] = document.getElementById(guessIds[i]).value;        
    }

    usersGuessesParsed = usersGuesses.map(function (x) { 
        return parseInt(x, 10); 
    });
}


function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0; i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}


function checkMatchedNums(){
    parseValues();
    var countMatches, countTotalMatches = 0;

    Array.prototype.diff = function(arr2) {
        var ret = [];
        this.sort();
        arr2.sort();
        for(var i = 0; i < this.length; i += 1) {
            if(arr2.indexOf(this[i]) > -1){
                ret.push(this[i]);
            }
        }
        return ret;
    };

    countMatches = randNumArr.diff(usersGuessesParsed);
    countTotalMatches = randNumArr.diff(usersGuessesParsed).length;

    displayResults(countMatches, countTotalMatches);
}


function displayResults(countMatches, countTotalMatches){
    document.getElementById("resultScore").innerText = "You matched the numbers: " + countMatches;
    document.getElementById("totalCount").innerHTML = "Total Score: " + countTotalMatches;

    for(var i = 0; i < maxSize; i++){
         document.getElementById(idArr[i]).innerText = randNumArr[i];
    }
}