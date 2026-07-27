//shorthand object
//without using object literal
function obj(name, age) {
  return {
    name: name,
    age: age,
  };
}

// console.log(obj("Rayhan", 28));

//using object literal
function bio(name, age) {
  return {
    name,
    age,
  };
}
console.log(bio("Rayhan", 28));

// const kl = {
//   body: function () {
//     return "I'm a programmer";
//   },
// };

//object literal object er shortkut( object we vitore function thakle seita
/*
const kl = {
  body() {
    return "amar ghore fera hobe";
  },
};

console.log(kl.body());
*/
//object literal object er shortkut( object we vitore function thakle seita
//same process more shortkut
const kl = {
  rayhan() {
    return "amar ghore fera hobe";
  },
};

console.log(kl["rayhan"]());
