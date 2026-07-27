let para = document.querySelector("#how");

function change() {
  //   para.style.color = "blue";
  //   para.style.backgroundColor = "yellow";
  //   para.style.fontSize = "90px";
  //   para.style.display = "inline-block";
  para.classList.add("changeContent");
}

function asItis() {
  //   para.style.color = "";
  //   para.style.backgroundColor = "";
  //   para.style.fontSize = "";
  //   para.style.display = "";
  para.classList.remove("changeContent");
}
