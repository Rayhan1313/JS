/*
const square = (val) => console.log(`square value of ${val} : is ${val * val}`);

// square(5);
// const a = square;

const higherOrderFunction = (num, callBackFunction) => {
  callBackFunction(num);
};
higherOrderFunction(9, square);
*/

let firstOne = (cal) => {
  console.log("this is first One");
  cal();
};
let secondOne = (cal) =>
  setTimeout(() => {
    console.log("this is second one");
    cal();
  }, 5000);
let thirdOne = (cal) => {
  console.log("this is third one");
  cal();
};
let forthOne = () => console.log("this is forth Oone");

firstOne(() => {
  secondOne(() => {
    thirdOne(() => {
      forthOne();
    });
  });
});
