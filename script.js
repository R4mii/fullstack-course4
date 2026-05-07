// script.js - Main logic for Module 4 Assignment

// Step 1: Declare an array of names
var names = [
  "John",
  "Alice",
  "James",
  "Bob",
  "Jennifer",
  "Maria",
  "Jake",
  "Susan",
  "Jessica",
  "Tom"
];

// Step 2: Loop over the array of names
for (var i = 0; i < names.length; i++) {
  var name = names[i];

  // Step 3: Check if the name starts with 'j' or 'J'
  if (name[0] === "j" || name[0] === "J") {
    // Step 4a: If it starts with J/j, say Goodbye
    sayGoodbye(name);
  } else {
    // Step 4b: Otherwise, say Hello
    sayHello(name);
  }
}