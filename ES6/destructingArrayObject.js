//!array destructing
const data = [10, 20, 30, 40, 50, 25, 35];
//regular chilo
console.log(data[6]);

//destructing a vangtesi
let [d1, d2, d3, ...d4] = data;

console.log(d4);

// ! array swap
[d3, d2, d1] = [d1, d2, d3];
console.log(d3);

//! destructing Object
const student = {
  fullName: "Rayhan",
  age: 28,
  dob: "30/11/1997",
  nationality: "Bangladeshi",
  language: {
    native: "Bengali",
    secondary: "English",
    other: "Hindi",
  },
};

const { fullName, age, dob, nationality, language } = student;
console.log(fullName);
console.log(language);

//destructing function
const students = ({ name, age, hobby }) => {
  console.log(
    `My name is ${name}. I'm ${age} year's old. And my hobby is to ${hobby}`,
  );
};

const a = {
  name: "Rayhan",
  age: 28,
  hobby: "learn good things",
};

students(a);
