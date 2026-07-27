let numb = [10, 50, 30, 80, 56, 47];
for (let i = 0; i < numb.length; i++) {
  //   console.log(numb[i]);
}

//foreach a 3 ta parameter thake sequencially

/****
 * 1st value
 * 2nd index
 * full array
 */

// numb.forEach(ektaFunction);
// function ektaFunction(value) {
//   console.log(value);
// }

numb.forEach(function (val) {
  console.log(val);
});

numb.forEach(function (val, index, array) {
  console.log(`${index + 1} number a ase ${val}`);
});

let square = [];
numb.forEach(function (val, index, arr) {
  square.push(val * val);
  arr[index] = Math.sqrt(val);
});

console.log(square);
console.log(numb);
