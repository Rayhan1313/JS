const nums = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 5, 9, 15, 33, 45, 55, 65, 75, 85, 95, 105,
  7, 17, 27, 37, 47, 57, 67, 77, 87, 97, 107,
];
let newNums = nums.map(function (val) {
  return val * 2;
});
// console.log(newNums);

let fix = nums.filter(function (val) {
  return val > 70;
});
// console.log(
//   fix.sort(function (a, b) {
//     return b - a;
//   }),
// );

/**forEach a korle amon kora lagto ektra array declare kora lagto map a ta kora lagtese na */
let vv = [];
nums.forEach((v) => {
  vv.push(v * v);
});

// console.log(vv);

let outputWithMap = nums.map(function (val) {
  return val * val;
});

// console.log(outputWithMap);

let decide = nums.filter((p) => p > 100);
// console.log(decide);
