// Declare global Values that will be accessed during the Game.
const maxSize = 15;  
var randNumArr = [];
var usersGuesses = [];
var usersGuessesParsed = [];
var idArr = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "btn10", "btn11", "btn12", "btn13", "btn14", "btn15"];
var guessIds = ["guess1", "guess2", "guess3", "guess4", "guess5", "guess6", "guess7", "guess8", "guess9", "guess10", "guess11", "guess12", "guess13", "guess14", "guess15"];


// Calculate Unique Random List
function calcUniqueRandomNums(){
    reset(); // 
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


function myFunction() {
    document.getElementById("usersGuess").style.visibility = "hidden";
}


// Set the timer to trigger Random nums to disappear and Userguesses to appear. 
function setTimer() {
    var myVar = setTimeout(clearNumVisibility, 5000);
    var myVar2 = setTimeout(makeVisible, 5000);
}


// Clear the nums when Timeout. 
function clearNumVisibility() {
    for(var i = 0; i < maxSize; i++){
        document.getElementById(idArr[i]).innerText = "";
    }
}


// Make Users Guesses fields visible as soon as random numbers disappear. 
function makeVisible(){
    document.getElementById("usersGuess").style.visibility = "visible";
}


// Parse out duplicate user guesses (Random Selection contains no duplicates). 
function parseValues(){
    usersGuesses = removeDuplicates(usersGuesses);

    for(var i = 0; i < maxSize; i++){
        usersGuesses[i] = document.getElementById(guessIds[i]).value;        
    }

    usersGuessesParsed = usersGuesses.map(function (x) { 
        return parseInt(x, 10); 
    });
}


// Calculate if duplicate. 
function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0; i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}


// Check for the matching numbers. 
function checkMatchedNums(){
    parseValues();
    var countMatches, countTotalMatches = 0;

    Array.prototype.diff = function(arr2) {
        var ret = [];
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


// Display Scores depending on matches. 
function displayResults(countMatches, countTotalMatches){

    if(countTotalMatches < 1) {
        document.getElementById("resultScore").innerText = "You didn't match any numbers"    
    }
    else if(countTotalMatches > 14){
        document.getElementById("resultScore").innerText = "You matched All the numbers, well done!";
        for(var i = 0; i < maxSize; i++){
            document.getElementById(idArr[i]).innerText = randNumArr[i];
        }
    }
    else {
        document.getElementById("resultScore").innerText = "You matched the numbers: " + countMatches;
        document.getElementById("totalCount").innerHTML = "Total Score: " + countTotalMatches;
    
        for(var i = 0; i < maxSize; i++){
            document.getElementById(idArr[i]).innerText = randNumArr[i];
        }
    }
    document.getElementById("startBtn").innerHTML = "New Game";
    document.getElementById("startBtn").disabled = false;
}


// Reset all fields
function reset(){
    randNumArr = [];
    usersGuesses = [];
    usersGuessesParsed = [];

    document.getElementById("resultScore").innerText = "";
    document.getElementById("totalCount").innerHTML = "";

    for(var i = 0; i < maxSize; i++){
        document.getElementById(guessIds[i]).value = "";
    }
}