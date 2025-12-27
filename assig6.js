// Question 1. Create a function that prints “Hello Students”.
// Call the function and display the result.

function greetStudents() {
  console.log("Hello Students");
}
greetStudents();

// Question 2. Create a function that takes a number and returns its square.
// Input: 5 → Output: 25
function square(num) {
  return num * num;
}
console.log(square(5)); // 25

// Question 3. Create a function that takes two numbers and returns their sum.
// Input: 4, 7 → Output: 11
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 7)); // 11

// Question 4. Create a function that checks if a number is even or odd.
// Output:
// Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(7));

// Question 5. Create a function that takes first name and last name and returns full name.
// "Talha", "Habib" → Talha Habib
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("Talha", "Habib"));

// Question 6. Create a function that calculates the percentage.
// Formula:
// percentage = (obtainedMarks / totalMarks) * 100
function calculatePercentage(obtainedMarks, totalMarks) {
  return (obtainedMarks / totalMarks) * 100;
}
console.log(calculatePercentage(460, 500));

// Qusetion 7. Create an arrow function that returns age group.
// Condition:
// • age >= 18 → "Adult"
// • else → "Minor"
const ageGroup = (age) => {
  return age >= 18 ? "Adult" : "Minor";
}
console.log(ageGroup(16));

// Question 8. Create an arrow function that returns the length of a string.
// Example:
// "JavaScript" → 10
const stringLength = (str) => str.length;
console.log(stringLength("JavaScript")); // 10

// Question 9. Create an arrow function that checks if a number is positive, negative, or zero.
const checkNumber = (num) => {
  if (num > 0) return "Positive";
  else if (num < 0) return "Negative";
  else return "Zero";
}
console.log(checkNumber(-5));

// Question 10. Create an arrow function that takes an array and returns the first element.
// Example:
// [10, 20, 30] → 10
const firstElement = (arr) => arr[0];
console.log(firstElement([10, 20, 30])); // 10
