const patients = require("./patients");
const height = parseFloat(process.argv[2]);

const patientShorterThan = patients.filter(function(patient) {
    if (patient.height < height) {
        return true;
    }   else {
        return false;
    }
})
console.log("OUTPUT:", patientShorterThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS SHORTER THAN ${height}m :`, patientShorterThan.length);
