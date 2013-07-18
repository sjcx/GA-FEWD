$(function(){


	//Prompt the user for their first name and last name.
	var firstName = prompt("What's your name?");
	var lastName = prompt("What's your last name?")

	//Create a new variable called full name and store the users full name.


	//Print the full name to the console.
	console.log(firstName + " " + lastName);

	//Prompt the user for their age.
	var age = prompt("What's your age?")
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.
	if (age == 18 || age > 18)
	console.log("You're an adult")
	else 
	console.log("You're a minor")

	//Verify if the first name is "General" and the last name is NOT "Assembly"
	first = firstName == "General" ? true: false;
	console.log(first);
	
	last = lastName != "Assembly" ? true: false;
	console.log(last);


});
