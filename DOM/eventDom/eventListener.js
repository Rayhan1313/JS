const newHtag = document.querySelector("#firstH1");

newHtag.addEventListener("click", rayhan);

function rayhan() {
  //   alert("HI");
  newHtag.style.color = "red";
}

newHtag.addEventListener("mouseover", function () {
  newHtag.classList.add("changeContent");
});

newHtag.addEventListener("mouseout", function () {
  newHtag.classList.remove("changeContent");
});

const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");
const output = document.querySelector("#output");

btn1.addEventListener("click", function () {
  console.log("button 1 is clicked");
  output.innerHTML = "Button 1 is clicked";
});

btn2.addEventListener("click", function () {
  console.log("button 2 is clicked");
  output.innerHTML = "Button 2 is clicked";
});

btn3.addEventListener("click", function () {
  console.log("button 3 is clicked");
  output.innerHTML = "Button 3 is clicked";
});

const an = document.querySelector("#new");
an.addEventListener("mouseover", function () {
  let aa = Number(
    prompt("Enter Your Choice from 1 to 3? 1=Google; 2=Youtube; 3=Facebook"),
  );
  let link = ["www.google.com", "www.youtube.com", "www.facebook.com"];
  let a = document.querySelector("a");
  a.href = link[aa - 1];
  a.innerHTML = link[aa - 1];
  console.log(a.href);
});
