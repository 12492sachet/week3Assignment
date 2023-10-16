// I have converted the string "45" into a numeric value using the plus operator
const number = “45”;

//This will diplay numeric 45 in the console.
console.log(+number);


// First i will convert the string "20" to a number  and then add it to 40
const printSum = Number("20") + 40; 
console.log(printSum);// This will print result as 60.


// I have Created a sentence by combining strings and the sum of 23 and 4
const sentence = "I am " + (23 + 4) + " years old"; 
console.log(sentence);// The result will be "I am 27 years old".

//You cannot change a variable declared using const. this means i will declare it using let instead of const
let myVaue = “May”;


myValue = 86;// this is now allowed no errors

//Declaring the three variables with camelCase
const myFirstName = "lewis";
const lastName = "Machabe";
const guruCodingCourse = "Javascript";
const testScore = 86;
 

//using if-else to determine my score.
const testScore = 86;



// Defining the score 
const testScore = 86;

let grade;

// Checking if the test score is negative.
if (testScore < 0) {
  grade = "No test score ((-ve) value)"; // Setting grade to negative scores.
} else if (testScore <= 30) {
  grade = "F (Failed)"; // Setting grade to "F" and providing a description for scores below 30.
} else if (testScore <= 40) {
  grade = "E (Below Expectations)"; // Setting grade to "E" and providing a description for scores btwn 31 and 40.
} else if (testScore <= 49) {
  grade = "D (Satisfactory)"; // Setting grade to "D" and providing a description for scores btwn 41 and 49.
} else if (testScore <= 59) {
  grade = "C (Good)"; // Setting grade to "C" and providing a description for scores btwn 50 and 59.
} else if (testScore <= 69) {
  grade = "B (Very Good)"; // Setting grade to "B" and providing a description for scores btwn 60 and 69.
} else if (testScore <= 100) {
  grade = "A (Excellent)"; // Setting grade to "A" for scores 70 and above.
} else if (testScore >= 100) {
  grade = "Out of Range"; // Setting grade for scores above 100.
}

// Printting the  message to the console indicating the test score and the determining grade you scored.
console.log(`With a test score of ${testScore}, your performance is graded as: ${grade}`);





