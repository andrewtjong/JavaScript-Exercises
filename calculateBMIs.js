// calculateBMIs.js
const patients = require("./patients");

// console.log(patients);

// function calculateBMI(height, weight) {
//   return Math.round(weight / (height * height));
// }

const bmis = patients.map(function(patient) {
  const {firstName, lastName, height, weight} = patient;

  let BMI = Math.round(weight / (height * height)); // calculate BMI for a patient here

  return `${firstName} ${lastName}'s BMI is ${BMI}.` // return BMI for a patient here
});

console.log(bmis);