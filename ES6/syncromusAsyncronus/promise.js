console.log("Welcome");
/*
const promise1 = new Promise((resolve, reject) => {
  let promises = true;
  if (promises) {
    resolve("Hey welcome. You're in right place");
  } else {
    reject(new Error("Hoooah! You're just a hopper"));
  }
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Congratulations");
});
*/

// race case
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Congrates brother. You're in right track");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hey Man, What's Up?");
  }, 3500);
});

//single promise run process
/*

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

promise2.then((res) => {
  console.log(res);
});
*/
// Promise.all([promise1, promise2]).then(([res1, res2]) => {
Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
console.log("end");
