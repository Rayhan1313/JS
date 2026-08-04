const promise1 = new Promise((resolve, reject) => {
  let promise = false;
  if (promise) {
    resolve("you're Right on promise");
  } else {
    reject("You're hopper");
  }
});

promise1.then("End").catch("error");
console.log(promise1);
