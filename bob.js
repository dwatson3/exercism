//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// We wrote a method called hey, gave it a function
// with a return "Whatever."

// this.hey = "Whatever."

var Bob = function() {
	this.hey = function(phrase) {
		if (yelling(phrase)) {
			return "Whoa, chill out!";
		} else if (question(phrase)) {
			return "Sure.";
		} else if (silence(phrase)) {	
			return "Fine. Be that way!";
		} else {
			return "Whatever.";
		};
	};

	silence = function(phrase) {
		return phrase.match(/^\s*$/);
	}

	question = function(phrase) {
		return phrase.charAt(phrase.length-1) === "?";
	};

  yelling = function(phrase) {
    if (phrase.match(/[a-zA-Z]+/)){
      return phrase.toUpperCase() === phrase;
    };
  };
};



module.exports = Bob;

