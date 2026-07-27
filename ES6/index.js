// ! 1.function  call korte gele 'const' diye variable er moddhe rakhbo

//! 2.String er vitore template literal use

//! let and const use --- block scope

"use strict";

let name = "Rayhan";
let age = 17;

let output = `I am ${name}. I'm ${age} year's old.`;
console.log(output);

function news() {
  console.log("hello world");
}
news();

const newwwws = (a, b) => {
  console.log(a + b);
};
newwwws(7, 7);

//hoisting
// a variable before initialise

// like

//error starts from here
a = 20;
console.log(a);
let a; // jodi akhane var thakto tahole error thakto na.
//it will print a's value;

// if we use strict then it will gives us a error
