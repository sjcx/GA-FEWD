/**
 * Javascript Exercise: Functions
 */

/**
 * Question 1:
 * Write a funtion named "q1" that prints out "my first function" when executed
 */
var q1 = function(){
	console.log("my first function");
};


/**
 * Question 2:
 * Define a variable named "q2". Then, define a function named "excitement" that takes in a single
 * string and adds a "!" to the end of it and stores it in q2. Execute that function with the string
 * "Happy" (capital H)
 * Hint: Remember, you can use a "+" to joing two strings together.
 */
var q2;
var excitement = function(string){
	q2 = string + "!";
}
excitement("Happy");
/**
 * Question 3:
 * Define a function called "multiply" that takes in 3 arguments, all numbers, and multiplies them
 * together. Log the result
 */
var multiply = function(a, b, c){
	console.log(a*b*c);
}
