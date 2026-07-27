// let head1 = document.getElementById("head1");
// head1.innerHTML = "Good Bye Good Bye";

// let link = document.getElementsByTagName("a")[0];
// link.innerHTML = "Hey";

// let pClass = document.getElementsByClassName("test")[0];

// /*fun purpose */
// let random = Math.floor(Math.random() * 6) + 1;

// pClass.innerHTML = `guess ${random}`;

let head1 = document.querySelector("#head1");
head1.innerHTML = "Myself Rayhan";

let a = document.querySelector(".test");
a.innerHTML = "Kemne ki";

let b = document.querySelector("p");
b.innerHTML = "";

// document.querySelector("div .ray").innerHTML = "";

document.querySelectorAll("p.ray")[0].innerHTML = "";

//onclick method

let message = document.querySelector(".test");
let img = document.querySelector("img");
function rayhansMessage() {
  message.innerHTML = "Ami ekta Big Mad. Any doubt?";
  img.src = "../images/2.jpg";
}

let dui = document.querySelector("#dui");
function button2() {
  dui.innerHTML = "done";
  img.src = "../images/1.jpg";
}
