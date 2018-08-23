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




///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Test Script Code.
1. Create Buttons at runtime dynamically depending upon the users level.
2. The plan should be to have an initial 1 box, which increase sequentially as the player guesses the correct numbers.
3. The game ends when the user cant remember the numbers at each level.
4. The final Score should show the level the player reached, the score the got.
5. There should also be a Timer at each level, which should increase as the player progresses through the levels. */


// Create Button Test.
function testButtonCreate() {

	var level = 15;
	var buttonIds = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13", "b14", "b15"];
	var btnVar = "";

	switch(level){
		case 1:
			level == 1;
			var btnA = document.createElement("BUTTON");
			btnA.setAttribute("id", buttonIds[0]);
			btnA.setAttribute("class", "btn btn-primary");
			document.body.appendChild(btnA);
			break;
		case 2:
			level == 2;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 3:
			level == 3;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 4:
			level == 4;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 5:
			level == 5;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 6:
			level == 6;
			var btnA = document.createElement("BUTTON");
			btnA.setAttribute("id", buttonIds[0]);
			btnA.setAttribute("class", "btn btn-primary");
			document.body.appendChild(btnA);
			break;
		case 7:
			level == 7;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 8:
			level == 8;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 9:
			level == 9;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 10:
			level == 10;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 11:
			level == 11;
			var btnA = document.createElement("BUTTON");
			btnA.setAttribute("id", buttonIds[0]);
			btnA.setAttribute("class", "btn btn-primary");
			document.body.appendChild(btnA);
			break;
		case 12:
			level == 12;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 13:
			level == 13;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 14:
			level == 14;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;
		case 15:
			level == 15;
			for(i = 0; i < level; i++){
				btnVar = document.createElement("BUTTON");
				btnVar.setAttribute("id", buttonIds[0]);
				btnVar.setAttribute("class", "btn btn-primary");
				document.body.appendChild(btnVar);
			}
			break;

		default:
			document.write("Test");
	}
}
