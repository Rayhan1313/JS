const firstOne = () => {
  return new Promise((resolve, reject) => {
    resolve("First One Done");
  });
};

const secondOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Second One is Done");
  });
};

const thirdOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Third One is completed");
  });
};

const ForthOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Forth One is completed");
  });
};

firstOne()
  .then((response) => {
    console.log(response);
  })
  .then(secondOne)
  .then((res) => {
    console.log(res);
  })
  .then(thirdOne)
  .then((res) => {
    console.log(res);
  })
  .then(ForthOne)
  .then((resp) => {
    console.log(resp);
  });
