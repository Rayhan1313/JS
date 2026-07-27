const data = [10, 60, 30, 50, 100, 101, 500];

const finding = (val) => val > 100;

const aboveHundred = data.find(finding);
const aboveHundredIndex = data.findIndex(finding);
// console.log(aboveHundred);
// console.log(aboveHundredIndex);

//find and findIndex in object

const students = [
  {
    userName: "Rayhan",
    age: 28,
    cgpa: 3.37,
  },
  {
    userName: "Tisha",
    age: 27,
    cgpa: 3.9,
  },
  {
    userName: "Subroto",
    age: 30,
    cgpa: 4.6,
  },
];

const cGpaAboveFour = (val) => val.cgpa > 4;

const userAboveGpaFour = students.find(cGpaAboveFour);
const userAboveGpaFourIndex = students.findIndex(cGpaAboveFour);

console.log(userAboveGpaFour);
console.log(userAboveGpaFourIndex);
