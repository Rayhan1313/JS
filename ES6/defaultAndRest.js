//default parameter  -- aikhane a er default value diye rakhsi tai default   a = hello how are you
const defaultFunction = function (a = "hello how are you?") {
  console.log(`${a}`);
};

defaultFunction();
defaultFunction("Joy Bangla");

//rest  parameter syntax:       ...x

function rayhan(z, y, ...x) {
  console.log(`z=${z}, y=${y} and  x=${x}`);
}

rayhan(10, 20, 30, 40);
