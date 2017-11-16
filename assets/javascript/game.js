//Global variables
//**************************************************************
// Create an array of words
const word = ["red", "blue", "brown", "black", "pink", "white", "violet", 
"apricot", "silver", "cyan", "orange", "teal", "gray", "gold", "azure", "blond", 
"bronze", "ivory", "mint", "mustard", "amber", "cobalt", "coral", "cream", "crimson", "fuchsia", 
"lavender", "mauve", "olive", "rust", "tan"];
// Choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var rightLetter = [];
var wrongLetter= [];
var underScore = [];
var Wins = 0;
var Losses = 0;

//DOM Manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
//Main
//******************************************************
console.log(chosenWord);
//Create underscores based on length of word

function generateUnderScore() {
    for(var i = 0; i < chosenWord.length; i++){
        underScore.push('_');
        
    }
    return underScore;
}



// Get users guess
document.addEventListener('keypress', (event) => {
        var userLetter = String.fromCharCode(event.keyCode);
// if user guess is right
        if (chosenWord.indexOf(userLetter) > -1) {
        //add to the right word array
        rightLetter.push(userLetter);
        //replace underscore with right letter
        underScore[chosenWord.indexOf(userLetter)] = userLetter;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightLetter;
        Wins++;
        document.getElementById("wins").innerHTML = Wins;
                
        //check to see if user word matches guesses
        if(underScore.join('') == chosenWord) {
            alert("YAYY! YOU WIN!!");
        }
        } else {
        wrongLetter.push(userLetter);
        Losses++;
        document.getElementById("losses").innerHTML = Losses;
        docWrongGuess[0].innerHTML = wrongLetter;
        }

});


docUnderScore[0].innerHTML = generateUnderScore().join(' ');



// If right push to right array
// If wrong push to wrong array
// 