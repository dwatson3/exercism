var helloWorld = function() {};

helloWorld.prototype.hello = function(input) {
	if (input !== "") {
		return ('Hello, ' + input + "!");
	} else {
		return 'Hello, world!';
	}
};

module.exports = helloWorld;
