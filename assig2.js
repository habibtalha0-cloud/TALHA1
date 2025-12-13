// ========== Part 1 — Take Input Using prompt() ========== //
let studentName = prompt("Enter Student Name:");
let subject1 = prompt("Enter Subject 1 Marks:");
let subject2 = prompt("Enter Subject 2 Marks:");
let subject3 = prompt("Enter Subject 3 Marks:");
let testDateInput = prompt("Enter Test Date (12-10-2025):");

// ========== Part 2 — Use Number Methods ========== //
subject1 = Number(subject1);
subject2 = Number(subject2);
subject3 = Number(subject3);

let totalMarks = subject1 + subject2 + subject3;
let percentage = (totalMarks / 300) * 100;
percentage = percentage.toFixed(2);

// ========== Part 3 — Use Math Methods ========== //
let highestMarks = Math.max(subject1, subject2, subject3);
let lowestMarks = Math.min(subject1, subject2, subject3);

// Random roll number between 1000 and 9999
let rollNumber = Math.floor(Math.random() * 9000) + 1000;

// Random number for Math methods
let randomNumber = Math.random() * 10;
let roundedValue = Math.round(randomNumber);
let floorValue = Math.floor(randomNumber);
let ceilValue = Math.ceil(randomNumber);

// ========== Part 4 — Use Date Methods ========== //
let testDate = new Date(testDateInput);

let day = testDate.getDay();
let month = testDate.getMonth() + 1;
let year = testDate.getFullYear();

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
let weekDayName = weekDays[day];

// ========== Part 5 — Use String Methods ========== //
let nameLength = studentName.length;
let upperCaseName = studentName.toUpperCase();
let lowerCaseName = studentName.toLowerCase();
let formattedName = studentName.replace(/ /g, "-");
let searchResult = studentName.search("a");

// ========== Part 6 — Final Output ========== //
console.log("Student Name:", studentName);
console.log("Formatted Name:", formattedName);

console.log("Total Marks:", totalMarks);
console.log("Highest Marks:", highestMarks);
console.log("Lowest Marks:", lowestMarks);
console.log("Percentage:", percentage + "%");

console.log("Random Roll Number:", rollNumber);

console.log("Test Day:", day);
console.log("Test Month:", month);
console.log("Test Year:", year);
console.log("Week Day Name:", weekDayName);

console.log("Name Length:", nameLength);
console.log("Upper Case:", upperCaseName);
console.log("Lower Case:", lowerCaseName);
console.log("Search Result (letter 'a'):", searchResult);

console.log("Math.round():", roundedValue);
console.log("Math.floor():", floorValue);
console.log("Math.ceil():", ceilValue);
