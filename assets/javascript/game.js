    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s,","t","u","v","w","x","y","z"]

    var wins = 0;
    var losses = 0;
    var guessesLeft = 7;
    var guessedLetters = []; 

// I need to understand this better //
    document.onkeyup = function(event) {
      userGuess = event.key;
    

    var computerGuess = letters[Math.floor(Math.random() * letters.length)]
  }

      // userGuess = letters? How do I say "If the user guess is in the letter array?"
      if (userGuess = "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s,","t","u","v","w","x","y","z") {
        if (userGuess != guessedLetters) {
          if (userGuess = computerGuess) {
          wins++;
          winupdate();
          reset();
        }
        else (userGuess != computerGuess) {
          guessesLeft --;
          updateGuessedLetters ();
        }  
    }
   } ;
      if (guessesLeft =< 1) {
        alert("Game Over, play again!")
        reset ();
      } ;
    

var winupdate = function() {
  document.querySelector(#wins).innerHTML = ("Wins: " + wins)
}
var reset = function() {
  computerGuess (); // is this going to reset the computers letter?
  guessesLeft = 7;
  guessedLetters = null;
}
var updateGuessedLetters = function () { // What is the correct way to write this? How do we add the user guess to the array
   var guessedLetters = String.fromCharCode(event.onkeyup).toLowerCase();
}