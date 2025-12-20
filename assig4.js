// Question 1. Check if a person is eligible to vote (age ≥ 18).
let age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
}
 else {
  console.log("Not eligible");
}

// Question 2. Grade calculation using else-if
let marks = 72;

if (marks >= 80) {
  console.log("Grade A");
}
 else if (marks >= 60) {
  console.log("Grade B");
}
 else if (marks >= 40) {
  console.log("Grade C");
}
 else {
  console.log("Fail");
}

// Question 3. Compare two numbers and print the larger one.
let a = 15;
let b = 30;

if (a > b) {
  console.log(a + " is larger");
}
 else {
  console.log(b + " is larger");
}

// Question 4. Check if temperature is hot, warm, or cold.
// Rules:
// • > 30 → Hot
// • 15 - 30 → Warm
// • < 15 → Cold
let temperature = 25;

if (temperature > 30) {
  console.log("Hot");
}
 else if (temperature >= 15 && temperature <= 30) {
  console.log("Warm");
}
 else {
  console.log("Cold");
}

// Question 5. Use ternary operator to check if a person is adult or minor.
// let age = 17;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
