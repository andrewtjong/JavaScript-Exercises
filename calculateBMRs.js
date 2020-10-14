// calculateBMRs.js
const patients = require("./patients");

const bmrs = patients.map(function(patient){
    const { weight, height, age, gender, firstName, lastName } = patient;
    let BMR = (gender === "m") ? 10 * weight + 6.25 * height - 5 * age + 50 : 10 * weight + 6.25 * height - 5 * age - 150;

    return `${firstName} ${lastName}'s BMR is: ${Math.round(BMR)}`;
})

console.log(bmrs);




