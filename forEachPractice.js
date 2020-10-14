const patients = require("./patients");

// declare function
function displayFullName(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  const { firstName, lastName } = patient;

  const fullName = `${firstName} ${lastName}`;

  console.log(fullName);
}

// pass as callback
patients.forEach(displayFullName);

// pass anonymous function directly
patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

  console.log(`${firstName} - age: ${age}`);
});

// DIY's
// - for each patient log their weight
// - for each patient, log their last name and gender
// - for each patient,
//      - if they are of gender 'm' console.log Mr. and their lastName
//      - if they are of gender 'f' console.log Mrs. and their lastName

// function logWeight(patient) {
//     const { weight, lastName, gender } = patient;
//     console.log(`${weight} kg, ${lastName} ${gender}`);
// };

// patients.forEach(logWeight);

function greetGender (patient) {
    const {gender, lastName} = patient;
    if (gender === "m") {
        console.log(`Mr. ${lastName}`);
    } else {
        console.log(`Mrs. ${lastName}`);
    };
};

patients.forEach(greetGender);