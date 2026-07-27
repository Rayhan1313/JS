console.clear();
// let one = document.querySelector('#one');
// let two = document.querySelector('#two');
// let three = document.querySelector('#three');
// let one = document.querySelector('#one');

let name = document.querySelector("input[name=fName]");
name.addEventListener("change", onchangeName);
// console.log(name);
function onchangeName(e) {
  console.log(e);
  console.log(e.type);
  console.log(e.target.className);
  console.log(e.target.id);
  console.log(e.target.value);
}

let checkbox = document.querySelectorAll("input[name=checkbox]");
console.log(checkbox);

Array.from(checkbox).map(function (e) {
  e.addEventListener("change", handleCheckBox);
});

function handleCheckBox(e) {
  console.log(e);
  //   console.log("changed");
  //   if (e.target.checked) {
  //     console.log(checked);
  //   } else {
  //     console.log("unchecked");
  //   }
  console.log(
    e.target.checked
      ? "Checked \n" + e.target.value
      : "unchecked \n" + e.target.value,
  );
}

let selects = document.querySelector("#department");
selects.addEventListener("change", function (e) {
  console.log(
    e.target.value === "empty"
      ? alert("please select your department")
      : e.target.value,
  );
});
