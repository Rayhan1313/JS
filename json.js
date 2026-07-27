const data = require("./friends_data.json");
const students = require("./students_data.json");
// console.log(data);

//access json data
// console.log(data.friends[0].name);
// console.log(data.friends[1].age);

//delete json data
delete data.friends[1].age;
// console.log(data.friends);

//update/ modify json data
data.friends[0].name = "Tanshin Mahin";
// console.log(data.friends[0]);

//looping json data
for (x in data) {
  //   console.log(x);
  //   console.log(data[x]);
}

// students.student[0].language.unshift("Prakrito");
// console.log(students.student[0].language);

//convert json to javascript ---server to client

let str = {
  history: [
    {
      name: "abc",
      age: 28,
    },
    {
      name: "def",
      age: 29,
    },
  ],
};

//convert javascript to json  ---client to server
let jsonData = JSON.stringify(str);
console.log(jsonData);

// console.log(JSON.parse(data));

//convert json to javascript ---server to client
console.log(JSON.parse(data));

//jokhon require use kora hoy tokhon json file ta automatically parse hoye jay and javascript object e convert hoye jay. tai amra JSON.parse() use kore data ke parse korar dorkar nei. amra direct data ke access korte pari.
