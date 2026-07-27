console.clear();
let textAreas = document.querySelector("textarea");
textAreas.classList.add("red");
textAreas.addEventListener("keydown", function (e) {
  //   textAreas.classList.remove("red");
  //   textAreas.classList.add("green");
  //   console.log("Key Down Event");

  e.repeat
    ? alert("You are holding the key")
    : console.log("You are pressing the key");
});

textAreas.addEventListener("keypress", function (e) {
  //   console.log("Key Press Event");
});

textAreas.addEventListener("keyup", function (e) {
  //   console.log(e.key);
  //   console.log(e.keyCode);
  //   console.log(e.code);
  /* e.ctrlKey ? console.log("Ctrl" + e.key) : console.log(`add ctrl before pressing any key`);  */
  //   e.shiftKey ? console.log("Shift   " + e.key) : "";
});
