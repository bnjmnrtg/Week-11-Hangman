var prompt = require('prompt');
var Word = require('./word.js');
var Game = require('./game.js');
var Letters = require('./letter.js');

prompt.start();

game = {
    // wordBank: ['Duncan', 'Parker', 'Ginobili', 'LaMarcus', 'Leonard', 'Gasol', 'Popovich'],
    wordsWon: 0,
    guessesRemaining: 10, //per word
    currentWrd: null, //the word object
    userGuess: [],
    startGame: function(wrd) {
        //make sure the user has 10 guesses
        this.resetGuessesRemaining();

        //get a random word from the array
        // this.currentWrd = new Word.Word(Game.game.wordBank[0].toLowerCase());
        this.currentWrd = new Word.Word(Game.game.wordBank[Math.floor(Math.random() * (6 - 0 + 1)) + 0].toLowerCase());
        this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters

        this.keepPromptingUser();

    },
    resetGuessesRemaining: function() {
        this.guessRemaining = 10;
        this.userGuess = [];
    },
    keepPromptingUser: function() {
        var self = this;

        prompt.get(['guessLetter'], function(err, result) {
            // result is an object like this: { guessLetter: 'f' }
            //console.log(result);
            self.userGuess.push(result.guessLetter)
            console.log('  The letter or space you guessed is: ' + result.guessLetter);

            //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
            var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

            //if the user guessed incorrectly minus the number of guesses they have left
            if (findHowManyOfUserGuess == 0) {
                console.log('You guessed wrong!');
                self.guessesRemaining--;
            } else {
                console.log('You guessed right!');

                //check if you win only when you are right
                console.log(self.currentWrd.didWeFindTheWord())
                if (self.currentWrd.didWeFindTheWord()) {
                    console.log('You Won!!!');
                    return; //end game
                }
            }

            console.log('Guesses remaining: ', self.guessesRemaining);
            console.log(self.currentWrd.wordRender());
            console.log('here are the letters you guessed already: ' + self.userGuess);

            if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)) {
                self.keepPromptingUser();
            } else if (self.guessesRemaining == 0) {
                console.log('Game over bro it was ', self.currentWrd.word);
                console.log('Get with the program man');
            } else {
                console.log(self.currentWrd.wordRender());
            }
        });
    }


};

game.startGame();
