// Runner for the exercises

function check(num, answer, correct) {
  if(answer) {
    document.write("<p>Question " + num + ": Correct!</p>");
  } else {
    document.write("<p style=\"color:red;\">Question " + num + ": Wrong. Should output " + correct + "</p>");
  }
  document.write("- - - - - - - - - - - - - - - - - - - - - -")
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}

check(1, q1 == 4, 4);
check(2, typeof q2 == "string", "a string");
check(3, typeof q3 == "number", "a number");
check(4, q4 == "rgb(100, 150, 20)", "rgb(100, 150, 20)")
check(5, q5 == null, null)

document.write("Quiz Checking Complete!")