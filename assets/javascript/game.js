    console.log("LOADED");

    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 12;
    var guessedLetters = []; 
    var computerGuess = null;
    
  
    var updateGuessesLeft = function () {
      document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    };

    var updateComputerGuess = function () {
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
    };

    var updateGuessedLettersSoFar = function () {
       document.querySelector("#guessedLetters").innerHTML = guessedLetters.join (", ");

    };

    var reset = function () {
      guessesLeft = 12;
      guessedLetters = [];
      updateComputerGuess ();
      updateGuessesLeft  ();
      updateGuessedLettersSoFar ();
    };

    updateComputerGuess ();
    updateGuessesLeft ();

   document.onkeyup = function (event) {

      guessesLeft--;
    
      var letter = String.fromCharCode(event.keyCode).toLowerCase();
    
      guessedLetters.push (letter);
    
      updateGuessesLeft ();
    
      updateGuessedLettersSoFar ();
    
      if (letter === computerGuess){
    
        wins++;
    
        document.querySelector("#wins").innerHTML = wins;
    
        reset ();
    
      }
    
      if (guessesLeft === 0) {
    
        losses++;
    
        document.querySelector("#losses").innerHTML = losses;
    
        reset ();
    

      }
    };






// // I need to understand this better //
//     computerGuess = function () {
//       computerGuess = letters[Math.floor(Math.random() * letters.length)];
// }
//       console.log(computerGuess);

//     document.onkeyup = function(event) {
//       userGuess = event.key;
    

//       // userGuess = letters? How do I say "If the user guess is in the letter array?"
//       if (letters.indexOf(userGuess) > -1){
//         if (userGuess != guessedLetters) {
//           if (userGuess = computerGuess) {
//           wins++;
//           winupdate();
//           reset();
//         }
//         else if(userGuess != computerGuess) {
//           guessesLeft --;
//           updateGuessedLetters ();
//         }
//     }
//    }
//     if (guessesLeft <= 1) {
//       alert("Game Over, play again!")
//       reset ();
//     }
//   }
    

// var winupdate = function() {
//   document.querySelector("#wins").innerHTML = ("Wins: " + wins)
// }
// var reset = function() {
//    // is this going to reset the computers letter?
//   guessesLeft = 7;
//   guessedLetters = null;
// }

// var updateGuessedLetters = function () { // What is the correct way to write this? How do we add the user guess to the array
//    guessedLetters = String.fromCharCode(event.onkeyup).toLowerCase()
// }
//    // Need to push to letters //