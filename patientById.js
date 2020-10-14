const patients = require("./patients");
// hardcoding id 2412 for now, we can make this dynamic later
const id = parseInt(process.argv[2]);

const specificPatient = patients.find(function(patient) {
  //console.log("WHAT IS PATIENT?", patient);
  if (id === patient.id) {
    return true;
  } else {
    return false;
  }
});

if (specificPatient !== undefined ) {
    console.log("OUTPUT", specificPatient)
} else {
    console.log(`Patient with ${id} not found`)
}
