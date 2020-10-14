// patientByEmail.js
const patients = require("./patients");
const email = process.argv[2];

let specificPatient = patients.find(function(patient) {
    if (email === patient.email) {
        return true;
    } else {
        return false;
    }
});

if (specificPatient !== undefined) {
    console.log("Output:", specificPatient)
} else{
    console.log(`Patient with email ${email} is not found`)
}
