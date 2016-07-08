//import Letter above with requiring the letter.js file
var letterJs = require('./letter.js')

var Word = function(wrd){
	//set a property called word and set it equal to what you think it should be
	this.word = wrd;
	//set a property called lets to an empty array. We will eventually push letter objects in here
	this.lets =[];
	//set a property called found to false
	this.found = false;
	//make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property.
	getLets = function() {
		for (var i = 0; i < this.word.length; i++) {
			console.log(this.word[i]);
			this.lets.push(new Letter(this.word[i]))
		}
	}
	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not
		if (this.lets[i] === false) {
		this.found = true;
		return this.found;
		} else{
			this.found = false;
			return " ";
		}
	};

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable whatToReturn to 0
		var whatToReturn = 0;
		//loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.
		for (var i = 0; i < this.lets[i].length; i++) {
			if (charac === guessletter) {
				this.appear = true;
				whatToReturn++;
			} else
				this.appear = false;
		}
		return whatToReturn
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = "";
		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for (var i = 0; i < this.lets.length; i++) {
			str += (this.lets[i].letterRender())
		}
		return str;
	};
}

// Words I Want ====== ['Duncan', 'Parker','Ginobili','LaMarcus','Leonard','Gasol','Popovich'];

//export the Word constructor here at the end
module.export = Word();



