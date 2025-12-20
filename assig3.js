// Question 1. Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Question 2. Print all even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Question 3. Print elements of this array using map ()
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.map(fruit => console.log(fruit));

// Question 4. Create an array of numbers and print their squares using map()
let nums = [2, 3, 4, 5];

let squares = nums.map(num => num * num);
console.log(squares.join(" "));

// Question 5. Convert this array into uppercase using map()
let countries = ["pakistan", "china", "japan", "turkey"];
let upperCountries = countries.map(country => country.toUpperCase());
console.log(upperCountries.join(" "));

// Question 6. Print multiplication table of 5 using a for loop
// Example:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
