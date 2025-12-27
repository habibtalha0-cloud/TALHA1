// Question 1. Detect a keypress event
// When the user presses any key in the input box, show:
// A key was pressed!
  const input = document.getElementById("inputBox");

  input.addEventListener("keypress", function () {
    console.log("A key was pressed!");
  })

// Question 2. Display the exact key pressed
// Example:
// User presses "a" → Output:
// You pressed: a
// Use:
// event.key
  const input2 = document.getElementById("inputBox");
  input.addEventListener("keypress", function (event) {
    console.log("You pressed: " + event.key);
  })

// Question 3. Display the keyboard code of the key pressed
// Example:
// User presses "Enter" →
// Key Code: Enter
// Use:
// event.code
  const input3 = document.getElementById("inputBox");
  input.addEventListener("keydown", function (event) {
    console.log("Key Code: " + event.code);
  })

// Question 4. Detect when the user holds a key (keydown)
// Output:
// Key is being held down
  const input4 = document.getElementById("inputBox");

  input.addEventListener("keydown", function () {
    console.log("Key is being held down");
  })

// Question 5. Detect when user releases a key (keyup)
// Output:
// Key released
  const input5 = document.getElementById("inputBox");

  input.addEventListener("keyup", function () {
    console.log("Key released");
  })

// Question 6. Count how many keys user has pressed in total
// Every time a key is pressed, increase count:
// Total keys pressed: 5
  const input6 = document.getElementById("inputBox");
  let count = 0;

  input.addEventListener("keydown", function () {
    count++;
    console.log("Total keys pressed: " + count);
  })
