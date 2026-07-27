let name = "Rayhan";
let age = 29;
let cgpa = 3.37;
let lang = ["Bangla", "English", "Math"];

//let make an object and put all the info in one variable....
let student1 = {
  name: "Rayhan Himel",
  age: 27,
  cgpa: 3.36,
  lang: ["Bengali", "English", "Arabic"],
};
let student2 = {
  name: "Rayhan Himel",
  age: 27,
  cgpa: 3.36,
  lang: ["Bengali", "English", "Arabic"],
};
let student3 = {
  name: "Rayhan Himel",
  age: 27,
  cgpa: 3.36,
  lang: ["Bengali", "English", "Arabic"],
};

// console.log(student1.name,student1.age,student1.cgpa,student1.lang);

//amra chaile constructor diye templete kore agulo sob single line a nite pari .constructor template banay daay just function er moddhe object call kore onek line save kora jaay.

//ekta constructor create korno akhon

//constructor exceptional kisu na, function e just aitaar this property thake.

function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  //print function create kortesi constructor diye
  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  };
}

//akhon a constructor use korle amamr onek line save hobe .
//constructor use korar way simple   like  new Student(name, age, cgpa, lang) value just pass kore dewa object hisebe jabe.

let students1 = new Student("Rayhans", 29, 3.37, [
  "Bengali",
  "English",
  "Arabic",
]);
let students2 = new Student("Tisha", 28, 3.9, ["Bengali", "Hindi", "English"]);
let students3 = new Student("Misha", 35, 4.0, [
  "Bengali",
  "English",
  "Spanish",
]);

// console.log(students1.lang);

//construction er print function call kore full object print korbo akhon
// students1.display();

// lets practice constructor and object
function Country(nationality, fruit, flower, bird, slang) {
  this.nationality = nationality;
  this.fruit = fruit;
  this.flower = flower;
  this.bird = bird;
  this.slang = slang;

  this.Show = function () {
    console.log(this.nationality);
    console.log(this.fruit);
    console.log(this.flower);
    console.log(this.bird);
    console.log(this.slang + `\n`);
  };
}

let country1 = new Country(
  "Bangladesh",
  "JackFruit",
  "Lily",
  "Doel",
  "Bainchod",
);
let country2 = new Country("Indian", "Mango", "Lotus", "Peacock", "Desi");
let country3 = new Country(
  "Pakistani",
  "Mango",
  "Jasmine",
  "Chukar Partridge",
  "Pak",
);

/*** print function hide kori 
 * 
 * 
let print1 = country1.Show();
let print2 =country2.Show();
let print3 = country3.Show();
 * 
** */

/*******      Math functionalities       ******* */
//absolute function
// let input1 =parseInt(prompt(`Enter input1: `));
// let input2 =parseInt(prompt(`Enter input2: `));
// let input3 =parseInt(prompt(`Enter input3: `));
// let input4 =parseInt(prompt(`Enter input4: `));

// console.log(Math.abs(input1));

// console.log(Math.floor(input1));

// console.log(Math.pow(input3, input4));

// console.log(Math.sqrt(input3));

// console.log(Math.max(input1,input2,input3, input4));

let randomValue = Math.random();
// console.log(randomValue);

//random values er khetre default call Math.random() call korle value 0 theke 1 er majhkhaner value return kore . like 0<random value <1

// akhon jodi 1 theke 5 porjonto random value chai tahole logic hobe Math.random() * 5 +1 ; akhane sesher 1 define kortese random value jodi 0 ase tahole 0+1 =1 ; theke  ar Math.random() * 5 er value hobe 0<random<5; so function daray

randomValue = Math.floor(Math.random() * 5) + 1;
// console.log(randomValue);

//aita 1 theke six porjonto print korbe
randomValue6 = Math.floor(Math.random() * 6) + 1;
// console.log(randomValue6);

//akhon jodi 90 theke 100 porjonto number print randomdom korte chai tahole nicher code hobe.
let rand = Math.floor(Math.random() * 11) + 90;
console.log(rand);

//perfect

/******************Date Function***************** */

/*

let date = new Date();
console.log(date);
let year =date.getFullYear();
console.log('year: '+ year);

let currentDate =date.getDate();
console.log('currentDate: '+ currentDate);

let currentMonth = date.getMonth() + 1;
console.log(`currentMonth : ${currentMonth}`);

let currentDay =date.getDay();// 0 theke 6 retrun kore
console.log('currentDay'+currentDay);

console.log('Hour: '+  date.getHours());
console.log('Minutes: '+ date.getMinutes());
console.log('Seconds:' + date.getSeconds());

const minutes = date.getMinutes();
const second = date.getSeconds();
0<=minutes <=9? '00' : minutes;
0<=second <=9? '00': 'second';

let customiseDate = currentDate + '-' + currentMonth + '-'+ year + " " + date.getHours()+':'+ minutes+ ':'+ second;

console.log(customiseDate);



*/
