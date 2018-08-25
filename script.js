// Declare global Values that will be accessed during the Game.
const maxSize = 15;
var gameLevel = 1;
var btnVar = "";
var countMatches, countTotalMatches = 0;
var randNumArr = [];
var usersGuesses = [];
var usersGuessesParsed = [];
var idArr = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "btn10", "btn11", "btn12", "btn13", "btn14", "btn15"];
var guessIds = ["guess1", "guess2", "guess3", "guess4", "guess5", "guess6", "guess7", "guess8", "guess9", "guess10", "guess11", "guess12", "guess13", "guess14", "guess15"];



function repopulateGuessIds(){
	var guessIdReset = ["guess1", "guess2", "guess3", "guess4", "guess5", "guess6", "guess7", "guess8", "guess9", "guess10", "guess11", "guess12", "guess13", "guess14", "guess15"];
	return guessIdReset;
}


function repolulateOtherIds(){
	var idArrReset = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "btn10", "btn11", "btn12", "btn13", "btn14", "btn15"];
	return idArrReset;
}


// Calculate Unique Random List
function startGame(){
	createButtons(idArr, gameLevel);

	while(randNumArr.length < gameLevel){
		var randomnumber = Math.floor(Math.random()*50) + 1;
		if(randNumArr.indexOf(randomnumber) > -1) continue;
		randNumArr[randNumArr.length] = randomnumber;
	}
	for(var i = 0; i < gameLevel; i++){
		document.getElementById(idArr[i]).innerText = randNumArr[i];
	}
	document.getElementById("startBtn").disabled = true;
	setTimer();
	displayCurrentLevel();
}


function hideUserInput() {
    document.getElementById("usersGuess").style.visibility = "hidden";
}


// Set the timer to trigger Random nums to disappear and Userguesses to appear. 
function setTimer() {
    var myVar = setTimeout(clearNumVisibility, 5000);
    var myVar2 = setTimeout(makeVisible, 5000);
}


// Clear the nums when Timeout. 
function clearNumVisibility() {
    for(var i = 0; i < gameLevel; i++){
        document.getElementById(idArr[i]).innerText = "";
    }
}


// Make Users Guesses fields visible as soon as random numbers disappear. 
function makeVisible(){
    document.getElementById("usersGuess").style.visibility = "visible";
	createGuessInputs(guessIds, gameLevel);
}


// Parse out duplicate user guesses (Random Selection contains no duplicates). 
function parseValues(){
    usersGuesses = removeDuplicates(usersGuesses);

    for(var i = 0; i < gameLevel; i++){
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

	if(countTotalMatches == gameLevel){
		reset();
		removeFields();
		gameLevel++;
		console.log("Game Level: " + gameLevel);
		guessIds = repopulateGuessIds();
		idArr = repolulateOtherIds();
		startGame();
	}
	else {
		document.getElementById("totalCount").innerText = "GAME OVER!\nYou Reached level :" + gameLevel;
		removeFields();
		reset();
	}
}

function displayCurrentLevel(){
	document.getElementById("totalCount").innerHTML = "LEVEL : " + gameLevel;
}


// Display Scores depending on matches. 
function displayResults(countMatches, countTotalMatches){

    if(countTotalMatches < 1) {
        document.getElementById("resultScore").innerText = "You didn't match any numbers"    
    }
    else if(countTotalMatches > 14){
        document.getElementById("resultScore").innerText = "You matched All the numbers, well done!";
    }
    else {
        document.getElementById("resultScore").innerText = "You matched the numbers: " + countMatches;
        document.getElementById("totalCount").innerHTML = "Total Score: " + countTotalMatches;
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

	for(var i = 0; i < gameLevel; i++){
		guessIds.splice(gameLevel);
		idArr.splice(gameLevel);
	}

    for(var i = 0; i < gameLevel; i++){
        document.getElementById(guessIds[i]).value = "";
		document.getElementById(idArr[i].innerText = "");
    }
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Test Script Code.
1. Create Buttons at runtime dynamically depending upon the users level. [Done with Test, see below, need to incorporate into game].
2. The plan should be to have an initial 1 box, which increase sequentially as the player guesses the correct numbers [DONE]
	a. Need to figure out where to have the function createButtons called and which params are required. [DONE]
3. The game ends when the user can't remember the numbers at each level [W.I.P]
4. The final Score should show the level the player reached, the score the got [DONE]
5. There should also be a Timer at each level, which should increase as the player progresses through the levels. */


function createButtons(idArr, gameLevel){

	switch(gameLevel){
		case 1:
			gameLevel == 1;
			buttonAttributes(btnVar);
			break;
		case 2:
			gameLevel == 2;
			buttonAttributes(btnVar);
			break;
		case 3:
			gameLevel == 3;
			buttonAttributes(btnVar);
			break;
		case 4:
			gameLevel == 4;
			buttonAttributes(btnVar);
			break;
		case 5:
			gameLevel == 5;
			buttonAttributes(btnVar);
			break;
		case 6:
			gameLevel == 6;
			buttonAttributes(btnVar);
			break;
		case 7:
			gameLevel == 7;
			buttonAttributes(btnVar);
			break;
		case 8:
			gameLevel == 8;
			buttonAttributes(btnVar);
			break;
		case 9:
			gameLevel == 9;
			buttonAttributes(btnVar);
			break;
		case 10:
			gameLevel == 10;
			buttonAttributes(btnVar);
			break;
		case 11:
			gameLevel == 11;
			buttonAttributes(btnVar);
			break;
		case 12:
			gameLevel == 12;
			buttonAttributes(btnVar);
			break;
		case 13:
			gameLevel == 13;
			buttonAttributes(btnVar);
			break;
		case 14:
			gameLevel == 14;
			buttonAttributes(btnVar);
			break;
		case 15:
			gameLevel == 15;
			buttonAttributes(btnVar);
			break;
		default:
			document.write("Level is 0");
	}
}


function buttonAttributes(btnVar){
	if(gameLevel == 1){
		btnVar = document.createElement("BUTTON");
		btnVar.setAttribute("id", idArr[0]);
		btnVar.setAttribute("class", "btn btn-primary");
		btnVar.setAttribute("disabled", "disabled");
		document.body.appendChild(btnVar);
	}
	else {
		for(i = 0; i < gameLevel; i++){
			btnVar = document.createElement("BUTTON");
			btnVar.setAttribute("id", idArr[i]);
			btnVar.setAttribute("class", "btn btn-primary");
			btnVar.setAttribute("disabled", "disabled");
			document.body.appendChild(btnVar);
		}
	}
}


function createGuessInputs(guessIds, gameLevel){
	var inputVar = "";

	switch(gameLevel){
		case 1:
			gameLevel == 1;
			inputAttributes(inputVar);
			break;
		case 2:
			gameLevel == 2;
			inputAttributes(inputVar);
			break;
		case 3:
			gameLevel == 3;
			inputAttributes(inputVar);
			break;
		case 4:
			gameLevel == 4;
			inputAttributes(inputVar);
			break;
		case 5:
			gameLevel == 5;
			inputAttributes(inputVar);
			break;
		case 6:
			gameLevel == 6;
			inputAttributes(inputVar);
			break;
		case 7:
			gameLevel == 7;
			inputAttributes(inputVar);
			break;
		case 8:
			gameLevel == 8;
			inputAttributes(inputVar);
			break;
		case 9:
			gameLevel == 9;
			inputAttributes(inputVar);
			break;
		case 10:
			gameLevel == 10;
			inputAttributes(inputVar);
			break;
		case 11:
			gameLevel == 11;
			inputAttributes(inputVar);
			break;
		case 12:
			gameLevel == 12;
			inputAttributes(inputVar);
			break;
		case 13:
			gameLevel == 13;
			inputAttributes(inputVar);
			break;
		case 14:
			gameLevel == 14;
			inputAttributes(inputVar);
			break;
		case 15:
			gameLevel == 15;
			inputAttributes(inputVar);
			break;
		default:
			document.write("Level is 0");
	}
}



function inputAttributes(inputVar){
	var divElement = document.getElementById("testUserGuess");

	if(gameLevel == 1){
		inputVar = document.createElement("INPUT");
		inputVar.setAttribute("id", guessIds[0]);
		inputVar.setAttribute("type", "text");
		inputVar.setAttribute("class", "usersGuess");
		divElement.setAttribute("class", "testUserGuess");
		divElement.appendChild(inputVar);
		document.body.appendChild(divElement);
	}
	else {
		for(i = 0; i < gameLevel; i++){
			inputVar = document.createElement("INPUT");
			inputVar.setAttribute("id", guessIds[i]);
			inputVar.setAttribute("type", "text");
			inputVar.setAttribute("class", "usersGuess");
			divElement.setAttribute("class", "testUserGuess");
			divElement.appendChild(inputVar);
			document.body.appendChild(divElement);
		}
	}
}


function removeFields(){
	var btn = "";
	var guessVar = "";
	var divElement = document.getElementById("testUserGuess");

	for(var i = 0; i < gameLevel; i++){
		btn = document.getElementById(idArr[i]);
		document.body.removeChild(btn);
		guessVar = document.getElementById(guessIds[i]);
		divElement.removeChild(guessVar);
	}
}
