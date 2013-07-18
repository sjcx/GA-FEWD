/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array with the elements 'New York' 'London' 'San Francisco'
 */
var q1 = ["New York", "London", "San Francisco"];

/**
 * Question 2
 * Create an array with the elements 'New York' 'London' 'San Francisco' and extract the first element
 */
var q2 = q1.splice(0,1);
/**
 * Question 3
 * Create an array with the elements 'New York' 'London' 'San Francisco' and extract the last element
 */
var q3 = ['New York', 'London', 'San Francisco'].pop()

/**
 * Question 4
 * Get the length of var q3
 */
var q4 = q3.length

/**
 * Question 5
 * Create a new array called q5 with the elements 'New York' 'London' 'San Francisco'.
 * Then add 'Berlin', 'Sydney', 'Boston',  'LA' to q5 array
 */
 var q5 = ["New York", "London", "San Francisco"];
 q5.push("Berlin", "Sydney", "Boston", "LA");
 console.log(q5);


/**
 * Question 6
 * Get  the length of array q5 programmatically
 */
var q6 = q5.length;
