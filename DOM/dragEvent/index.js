const div = document.querySelector("#div1");
const p = document.querySelector("#drag");

console.log(div, p);

// p.addEventListener("dragstart", function (e) {
//   e.dataTransfer.setData("idPass", e.target.id);
// });

// div.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });
// div.addEventListener("drop", function (e) {
//   const ids = e.dataTransfer.getData("idPass");
//   //   console.log(ids);
//   div.appendChild(document.querySelector(`#${ids}`));
//   e.preventDefault();
// });

p.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("drags", e.target.id);
});

div.addEventListener("dragover", function (e) {
  e.preventDefault();
});

div.addEventListener("drop", function (e) {
  const id = e.dataTransfer.getData("drags");
  div.appendChild(document.querySelector(`#${id}`));
  e.preventDefault();
});
