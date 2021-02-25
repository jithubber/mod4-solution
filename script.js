// ******************************* 
//      Module 4 Assignment
// *******************************
// This script takes an existing array of names and outputs either
// Hello 'Name' or Good Bye 'Name' to the console. The program says
// "Hello" to any name except names that start with a "J" or "j".
// Otherwise, the program says "Good Bye". The final output is:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/
// The entire contents of script.js is wrapped inside of an IIFE
// (Immediately Invoked Function Expression). See Lecture 52, part 2.

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over the names array and say either 'Hello' or "Good Bye"
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
// See Lecture 50, part 1

for (var i = 0; i < names.length; i++) {
  // 
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards. If needed, look up these
  // methods on Mozilla Developer Network web site.
  //
  var firstLetter = names[i].charAt(0).toLowerCase();
  // 
  // Compare the 'firstLetter' to lower case 'j'.  If the same, call
  // byeSpeaker's 'speak' method with the current name in the loop.
  // Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();
