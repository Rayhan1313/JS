let input = document.querySelector("input");
let p = document.querySelector("p");

input.addEventListener("copy", function () {
  console.log("copied");
  p.textContent = "copied";
});

input.addEventListener("cut", function () {
  console.log("cut");
  p.textContent = "cut";
});

input.addEventListener("paste", function () {
  console.log("pasted");
  p.textContent = "pasted";
});
