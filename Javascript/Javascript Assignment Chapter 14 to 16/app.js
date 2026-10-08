// Ch:14 Qno:01
let studentsName = [];

// Ch:14 Qno:02
let studentsNameObj = new Array();

// Ch:14 Qno:03
let newStudents = ["Alyan", "Hassan", "Sufiyan"];

// Ch:14 Qno:04
let numArray = [11, 25, 24, 33];

// Ch:14 Qno:05
let newBoolean = [true, false, true, false];

// Ch:14 Qno:06
let mixedArray = ["Alyan", 20, "Hassan", 14, "Sufiyan", 66];

// Ch:14 Qno:07
let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Education in Pakistan</h1>");
for (let i = 0; i < educationQualifications.length; i++) {
  document.write((i + 1) + ") " + educationQualifications[i] + "<br>");
}

// Ch:14 Qno:08
let studentNames = ["Michael", "John", "Tony"];
let studentsMarks = [328, 385, 410];
let total = 500;

let percentages = [
  (studentsMarks[0] / total) * 100,
  (studentsMarks[1] / total) * 100,
  (studentsMarks[2] / total) * 100
];

console.log("Score of " + studentNames[0] + " is " + studentsMarks[0] + " and Percentage is " + percentages[0] + "%");
console.log("Score of " + studentNames[1] + " is " + studentsMarks[1] + " and Percentage is " + percentages[1] + "%");
console.log("Score of " + studentNames[2] + " is " + studentsMarks[2] + " and Percentage is " + percentages[2] + "%");

// Ch:14 Qno:09
let colorsName = ["red", "green", "blue"];
document.write("<b>Original Colors:</b> " + colorsName + "<br>");
console.log("Original Colors:", colorsName);

// (a) Add color at the beginning
let userColor = prompt("Enter a color to add at the beginning:");
colorsName.unshift(userColor);
document.write("<b>After adding at the beginning:</b> " + colorsName + "<br>");
console.log("After adding at the beginning:", colorsName);

// (b) Add color at the end
let newColor = prompt("Enter a color to add at the end:");
colorsName.push(newColor);
document.write("<b>After adding at the end:</b> " + colorsName + "<br>");
console.log("After adding at the end:", colorsName);

// (c) Add two more colors to the beginning
colorsName.unshift("Black", "Silver");
document.write("<b>After adding two more colors:</b> " + colorsName + "<br>");
console.log("After adding two more colors:", colorsName);

// (d) Remove the first color
colorsName.shift();
document.write("<b>After removing the first color:</b> " + colorsName + "<br>");
console.log("After removing the first color:", colorsName);

// (e) Remove the last color
colorsName.pop();
document.write("<b>After removing the last color:</b> " + colorsName + "<br>");
console.log("After removing the last color:", colorsName);

// (f) Add color at specific position
let positionOf = prompt("At which position do you want to add a color?");
let colorAdd = prompt("Enter the color name to add:");
colorsName.splice(positionOf, 0, colorAdd);
document.write("<b>After adding color at position " + positionOf + ":</b> " + colorsName + "<br>");
console.log("After adding color at position:", colorsName);

// (g) Remove and Add color
let colorsName2 = ["red", "green", "blue"];
document.write("<br><b>Original Colors (Part g):</b> " + colorsName2 + "<br>");

// Add color
let addChoice = prompt("Do you want to add a color? (yes/no)");
if (addChoice.toLowerCase() === "yes") {
  let colorToAdd = prompt("Enter the color name to add:");
  let indexToAdd = +prompt("Enter the index where you want to add it:");
  colorsName2.splice(indexToAdd, 0, colorToAdd);
  document.write("<b>After adding:</b> " + colorsName2 + "<br>");
  console.log("After adding:", colorsName2);
}

// Delete color
let deleteChoice = prompt("Do you want to delete a color? (yes/no)");
if (deleteChoice.toLowerCase() === "yes") {
  let indexToDelete = +prompt("Enter the index from where you want to delete:");
  let howMany = +prompt("How many colors do you want to delete?");
  colorsName2.splice(indexToDelete, howMany);
  document.write("<b>After deleting:</b> " + colorsName2 + "<br>");
  console.log("After deleting:", colorsName2);
}

// Final display
document.write("<b>Final Colors Array:</b> " + colorsName2 + "<br>");
console.log("Final Colors Array:", colorsName2);

// Ch:14 Qno:10
let scores = [320, 230, 480, 120];
document.write("<br><b>Scores of Students:</b> " + scores + "<br>");
scores.sort();
document.write("<b>Ordered Scores of Students:</b> " + scores + "<br>");

// Ch:14 Qno:11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<br><b>Cities list:</b> " + cities + "<br>");
let selectedCities = cities.slice(2, 4);
document.write("<b>Selected cities list:</b> " + selectedCities + "<br>");

// Ch:14 Qno:12
let arr = ["This", "is", "my", "cat"];
document.write("<br><b>Array:</b> " + arr + "<br>");
let singleString = arr.join(" ");
document.write("<b>String:</b> " + singleString + "<br>");

// Ch:14 Qno:13
let devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<br><b>Devices:</b> " + devices + "<br><br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");

// Ch:14 Qno:14
let devices2 = ["keyboard", "mouse", "printer", "monitor"];
document.write("<br><b>Devices:</b> " + devices2 + "<br><br>");
document.write("Out: " + devices2.pop() + "<br>");
document.write("Out: " + devices2.pop() + "<br>");
document.write("Out: " + devices2.pop() + "<br>");
document.write("Out: " + devices2.pop() + "<br>");








