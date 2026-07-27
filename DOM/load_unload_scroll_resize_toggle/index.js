window.addEventListener("load", function () {
  console.log("loaded succcessfully");
});

window.addEventListener("unload", function () {
  console.log("reloaded succcessfully");
});

window.addEventListener("scroll", function (e) {
  // const height = window.outerHeight;
  //   const width = e.outerWidth;
  console.log("scrolled succcessfully" + height);
});

window.addEventListener("resize", function () {
  const height = window.outerHeight;
  const width = window.outerWidth;
  console.log(`resized successfully \n Height: ${height} \n Width: ${width}`);
});

const details = document.querySelector("details");

details.addEventListener("toggle", function (e) {
  console.log("toggled successfully");
  if (e.target.open) {
    console.log("opened successfully");
    alert("Enjoy the content of the details element!");
  }
});