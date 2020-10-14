const patients = require("./patients");
console.log(patients);

// map executes a callback for each element in the array
const anonymizedData = patients.map(function(patient) {
  // return an object with id and age, it gets added to the output array
  return {
    id: patient.id,
    age: patient.age,
    dailyExercise: patient.dailyExercise,
  };
});

console.log(anonymizedData);


// id: 2419,
// firstName: "Tamarah",
// lastName: "MacWhan",
// phoneNumber: "+48-617-441-0738",
// email: "tmacwhani@altervista.org",
// gender: "f",
// height: 2.16,
// weight: 103,
// dailyExercise: "yes",
// age: 33,