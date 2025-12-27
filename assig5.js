// Question 1. Check if two numbers are equal using ==. 
let a = 10;
let b = 10;

if (a == b) {
  console.log("a and b are equal");
}
else {
  console.log("a and b are not equal");
}

// Question 2. Check if two strings are not equal (!=)
let str1 = "hello";
let str2 = "world";

if (str1 != str2) {
  console.log("Strings are not equal");
}
else {
  console.log("Strings are equal");
}

// Question 3. Check if a number is greater than 50
let num = 60;

if (num > 50) {
  console.log("Number is greater than 50");
}
else {
  console.log("Number is not greater than 50");
}

// Question 4. Check if age is greater than or equal to 18.
let age = 19;

if(age >= 18) {
    console.log("Adult");
}
else {
    console.log("Not Adult");
}

// Question 5. Check if temperature is less than 10
let temp = 8;

if(temp < 10) {
    console.log("temperature is less than 10");
}
else{
    console.log("temperature is greater than 10");
}

// Question 6. Compare two numbers and show the smallest one.
let x = 14;
let y = 27;

if (x < y) {
  console.log(x + " is the smallest");
}
else {
  console.log(y + " is the smallest");
}

// Question 7. Check if a score is between 0 and 100 (inclusive).
// Use conditional operators only (no logical yet).
// score > = 0 AND score <= 100
let score = 85;

if (score >= 0 && score <= 100) {
  console.log("Valid score");
}
else {
  console.log("Invalid score");
}

// Question 8. Check if two numbers have the same remainder when divided by 2.
let n1 = 7;
let n2 = 11;

if (n1 % 2 == n2 % 2) {
  console.log("Both numbers are either even or odd");
} else {
  console.log("One is even and the other is odd");
}

// *************** PART 2 — Logical Operators (AND, OR,NOT) ***************

// Question 9. Check if a person can enter a club using AND (&&).
// Rules:
// • Age must be 18 or above
// • Person must have ID = true

// age is already given so im using age1

let age1 = 20;
let hasId = true;

if (age1 >= 18 && hasId == true) {
  console.log("Allowed");
}
else {
  console.log("Not Allowed");
}

// Question 10. Check if a number is either 0 OR greater than 100 using OR (||).

let num1 = 0;

if (num1 === 0 || num > 100) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

