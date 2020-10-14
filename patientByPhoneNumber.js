const patients = require("./patients");
const telephoneNumber = process.argv[2];

let specificPatient = patients.find(function(patient) {
    if (telephoneNumber === patient.phoneNumber) {
        return true;
    } else {
        return false;
    }
});

if (specificPatient !== undefined) {
    console.log("OUTPUT:", specificPatient)
} else {
    console.log(`The telephonenumber ${telephoneNumber} is not found.`)
}