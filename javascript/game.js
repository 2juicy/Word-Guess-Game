//global variable list
var lives = 12;
var wins = 0;
var loses = 0;
var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var words = ['doomfist', 'genji', 'tracer', 'hanzo', 'pharah', 'reaper', 'sombra', 'mercy', 'zenyatta', 'offense', 'defense', 'support', 'illios', 'hanamura', 'numbani', 'hollywood', 'dorado', 'oasis']
var answer = '';
var hiddenAnswer = [''];
var guesses = [''];
var letters = [''];
var correctLetters = [''];
//Generates a random word function then splits into single letters.
function randomWord(){
    lives = 12;
    guesses = [''];
    hiddenAnswer = [''];
    answer = words[Math.floor(Math.random() * words.length)];
    letters = answer.split('');
}
randomWord();
//hides word with '_' function
function hideWord(){
    for (let i = 0; i < letters.length; i++){
        hiddenAnswer[i] = '_';
    }
    document.getElementById('currentWord').innerHTML = hiddenAnswer.join(' ');
}
hideWord();
//var hidden = answer.replace(/[a-z], '_ ');
//On key event function.
document.onkeyup = function(event) {
    var userGuess = event.key;
    //Function to check input and swap letter
    function checkKey(){
        for (let i = 0; i < letters.length; i++){
            if (letters[i] === userGuess){
                hiddenAnswer[i] = userGuess;
            }
        }
        document.getElementById('currentWord').innerHTML = hiddenAnswer.join(' ');
    }
    //life remover
    function removeLife(){
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === userGuess){
                return false;
            }
        }
        return true;
    }
    //Win condition!
    function didiWin() {
        for (var i = 0; i < hiddenAnswer.length; i++) {
            if (hiddenAnswer[i] === '_') {
                return false;
            }
        }
        return true;
    }
    //if same letter is chosen
    for (let i = 0; i < guesses.length; i++) {
        if (guesses[i] === userGuess) {
            return; //kills the function.
        }}
    //checks if input is part of alphabet, will only run if input is valid.
    for (var i = 0; i < alphabet.length; i++) {   
        if (alphabet[i] === userGuess) {
        //if letter does not match   
        removeLife();
        if (removeLife() === true){
            lives--;
        }
        //if guess matches a letter in word
        checkKey();
        //pushes already used letters into an array to track lives, reset game when out of lives.
        guesses.push(userGuess)
        if (lives === 0){
            loses++;
            randomWord();
            hideWord();
        }
        }}
        didiWin();
            if (didiWin() === true){
                wins++;
                randomWord();
                hideWord();
        }
console.log(letters);
console.log(hiddenAnswer);
document.getElementById("yourGuesses").innerHTML = "Letters already guessed: " + guesses.join(' ');
document.getElementById("yourLoses").innerHTML = "Loses: " + loses;
document.getElementById("yourWins").innerHTML = "Wins: " + wins;
document.getElementById("yourLives").innerHTML = "Number of guesses remaining: " + lives;
}