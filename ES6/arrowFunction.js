//  regular function
function message() {
  console.log("Hello World");
}

function listen() {
  return "this is a joke";
}

function adds(a, b) {
  return a + b;
}

message();
console.log(listen());
console.log(adds(10, 5));

//arrow function
const message2 = () => {
  console.log("Hello world");
};

message2();

const listen2 = () => {
  return " hello its me 2";
};
console.log(listen2());
//or
const listen3 = () => "hello its me 3";
console.log(listen3());

const add2 = (a, b) => a + b;
console.log(add2(9, 10));

const studentData = [
  {
    name: "Rayhan",
    age: 28,
    occupation: "Service Holder",
    religion: "Islam",
    nationality: "Bangladeshi",
  },
  {
    name: "Tisha",
    age: 26,
    occupation: "Service Holder",
    religion: "Islam",
    nationality: "Bangladeshi",
  },
  {
    name: "Subroto",
    age: 30,
    occupation: "Teacher",
    religion: "Hindu",
    nationality: "India",
  },
  {
    name: "Sourav",
    age: 32,
    occupation: "Social Marketting",
    religion: "Hindu",
    nationality: "Nepal",
  },
];

//find name of student whose age are below 30; traditional function use kore korlam
function ageFinder() {
  return studentData
    .filter(function (x) {
      return x.age < 30;
    })
    .map(function (y) {
      return y.name;
    });
}

// console.log(ageFinder());

const ageFinder2 = () =>
  studentData.filter((x) => x.age > 30).map((y) => y.name);
// console.log(ageFinder2());

const hindus = () => studentData.filter((x) => x.age > 30).map((y) => y.name);

console.log(hindus());
