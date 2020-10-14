const patients = require("./patients");

const patientId = patients.map(function(patient) {
    const {firstName, lastName, id} = patient;
    return `${firstName} ${lastName}'s id is: ${id}`
})

console.log(patientId);