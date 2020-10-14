const patients = require("./patients");

// for (let index = 0; index < patients.length; index++) {
//     console.log("What is index", index);
//     console.log(patients[index].firstName + " " + patients[index].lastName);
// };


const names = ["Jacob", "David", "Dirl"];
// function greet(name) {
//     console.log(`Hi ${name}`);
// };

names.forEach(function(name) {
    console.log(`Hi ${name}`);
});


// const firstPatient = patients[0]
// console.log(firstPatient);


// const secondPatient = patients[1];
// const lastPatient = patients[patients.length - 1];

// console.log(secondPatient);
// console.log(lastPatient);

// const book = {
//     author: "J.K. Rowling",
//     title: "Harry Potter and the Philosopher's Stone",
//     publisher: "Bloomsbury Pub Ltd.",
//     ISBN: 9780747532743,
//     "fan site": "https://www.wizardingworld.com/",
//     "film-adaptation": "https://en.wikipedia.org/wiki/Harry_Potter_(film_series)",
//   };

// const {author, title, publisher, ISBN} = book;

// console.log(author, title);