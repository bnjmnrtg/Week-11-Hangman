var Letter = function(let) {
    //make a charac property and set it to what you think makes second_instructor_demonstration
    this.charac = let;
    // console.log(let);
    //make an appear property and set it to what makes sense
    this.appear = false;
    //make a letterRender property and set it to a function that does what you think makes sense
    this.letterRender = function() {
        if (this.appear === true) {
            return this.charac;
        } else if (this.charac === " ") {
            this.appear = true;
            return this.charac
        } else {
            return " ";
        }
    }
};

//export the Letter constructor here
exports.Letter = Letter;
