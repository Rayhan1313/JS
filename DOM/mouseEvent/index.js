console.clear();
let divs = document.querySelector("div");
divs.addEventListener("click", function () {
  //   console.log("clicked");
});

/*
divs.addEventListener("dblclick", function () {
  console.log("double clicked");
});

divs.addEventListener("mousedown", function () {
  console.log("mouseDown");
});

divs.addEventListener("mouseup", function () {
  console.log("mouseup");
});

divs.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});

divs.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});



divs.addEventListener("mouseover", function () {
  console.log("mouseover");
});

*/

divs.addEventListener("mousemove", function (e) {
  //   console.log("mousemove");
  //   console.log(e.target);
  //   console.log(e.target.innerHTML);
  //   console.log(e.target.innerText);
  //   console.log(e.target.textContent);
  //   console.log(`clientX: ${e.clientX}, clienetY: ${e.clientY}`);
  //   console.log(`offsetX: ${e.offsetX}, offsetY: ${e.offsetY}`);
});

let btns = document.querySelectorAll(".btn");

Array.from(btns).map(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.target.innerText);
    divs.style.backgroundColor = "red";
  });
});
