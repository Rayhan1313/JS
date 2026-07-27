let textInput = document.querySelector("#textInput");

textInput.addEventListener("blur", function (e) {
  e.target.value = e.target.value.toUpperCase();
  console.log(e.target.value);
});

textInput.addEventListener("focus", function () {
  // console.log(textInput.innerText.length);

  textInput.style.color = "red";
  textInput.style.backgroundColor = "yellow";
  textInput.style.fontSize = "20px";
  textInput.style.fontStyle = "italic";
});

textInput.addEventListener("focusin", function () {
  // console.log(textInput.value);
});

textInput.addEventListener("focusout", function () {
  // console.log(textInput.value);
});
