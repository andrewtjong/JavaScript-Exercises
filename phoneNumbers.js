const patients = require("./patients");

const patientsPhoneNumbers = patients.map(function(patient) {
    const {firstName, phoneNumber} = patient;
    return `${firstName}'s telephonenumber: ${phoneNumber}`;
})

console.log(patientsPhoneNumbers);