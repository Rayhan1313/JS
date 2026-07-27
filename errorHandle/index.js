/*

//try block
try {
  alert("hi");
  alert(x);
} catch (error) {
  //catch block
  alert(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  //finally block
  alert("bye");
}

*/

// const inputField = document.getElementById('inputHub');
// const btn = document.getElementById('submitBtn');
// const outcome = document.getElementById('outputShow');

const doc = document.querySelector("body");
const inputs = doc.children[0];
const btn = inputs.nextElementSibling;
const output = btn.nextElementSibling;

btn.addEventListener("click", function () {
  // alert("Hi");
  console.log(inputs.value);
  try {
    if (inputs.value < 5) {
      // throw new Error("Number is too short");
      throw "Number is too short";
    } else if (inputs.value > 10) {
      // throw new Error("Number is too big");
      throw "Number is too big";
    }
  } catch (error) {
    // console.log(error.message);
    // console.log(error.name);
    // console.log(error.stack);
    alert(error);
    console.log(error);
  } finally {
    alert("all exception handeled");
  }
});
