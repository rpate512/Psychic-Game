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






