// patientsWeighingLessThan.js
const patients = require("./patients");
const weight = process.argv[2];

console.log(patients);

const patientsWeighingLessThan = patients.filter(function(patient){
    if (patient.weight < weight) {
        return true;
    } else {
        return false;
    }
}); 

console.log("OUTPUT:", patientsWeighingLessThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}:`, patientsWeighingLessThan.length);
