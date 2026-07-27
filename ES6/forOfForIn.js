const dataa = ["Rayhan", "Tisha", "Misha", "Sabina", "Raiyan"];

for (let data of dataa) {
  console.log(data);
}

const arrayName = {
  name: "Rayhan",
  age: 28,
  cgpa: 3.37,
  nationality: "Bangladeshi",
};

console.log("<br>");
for (let student in arrayName) {
  //   console.log(student);
  console.log(`${student}: ${arrayName[student]}`);
}

// const txt = [100, 10, 500, 300, 544];

// function count(...txt) {
//   let score = 0;
//   for (let x of txt) {
//     score += x;
//   }
//   return score;
// }

// console.log(count(...txt));
