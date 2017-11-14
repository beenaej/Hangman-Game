//Global variables
//**************************************************************
// Create an array of words
const word = ["red", "blue", "brown", "black", "pink", "purple", "white"];
// Choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var rightWord = [];
var wrongWord= [];
var underScore = [];

//DOM Manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
//Main
//******************************************************
console.log(chosenWord);
//Create underscores based on length of word

var generateUnderScore = () => {
    for(var i = 0; i < chosenWord.length; i++){
        underScore.push('_');
        
    }
    return underScore;
}


// Get users guess
document.addEventListener('keypress', (event) => {
        var keyWord = String.fromCharCode(event.keyCode);
// if user guess is right
        if (chosenWord.indexOf(keyWord) > -1) {
        //add to the right word array
        rightWord.push(keyWord);
        //replace underscore with right letter
        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;
                
        //check to see if user word matches guesses
        if(underScore.join('') == chosenWord) {
            alert('You Win');
        }
        } else {
        wrongWord.push(keyWord);
        docWrongGuess[0].innerHTML = wrongWord;
        }
});


docUnderScore[0].innerHTML = generateUnderScore().join(' ');



// If right push to right array
// If wrong push to wrong array
// 