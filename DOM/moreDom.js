let div = document.querySelector("#me");
let a = document.querySelector("p .new");

//style add portion start
a.style.backgroundColor = "rgb(238, 216, 15)";
a.style.textDecoration = "none";
a.style.color = "red";
a.style.lineHeight = "30px";
a.style.fontSize = "20px";
a.style.letterSpacing = "4px";
//style add portion ends

//attribute value set option starts
a.href = "https://www.chatgpt.com";
a.target = "_blank";
// attribute option option ends

// lets create tag
const newElement = document.createElement("p");
//create tag value
const newElementValue = document.createTextNode("No more sorrow");

//tag er moddhe value add soabr last a
newElement.appendChild(newElementValue);

//kon position a tag add korbo seita set kora
div.appendChild(newElement);

// remove kortesi speific item

div.removeChild(document.querySelector("h1"));

//insert korbo jkono jaygay

// lets create tag
const newElement0 = document.createElement("p");
//create tag value
const newElementValue0 = document.createTextNode("No more sorrow 2");

//tag er moddhe value add soabr last a
newElement0.appendChild(newElementValue0);
div.insertBefore(newElement0, newElement);

// class view process
div.classList;
//class add process
div.classList.add("new-one");
// console.log(div.classList)

// remove classlist
div.classList.remove("nr");
// console.log(div.classList);

let link2 = document.createElement("a");
let text = document.createTextNode("Hellow there");
link2.appendChild(text);
link2.href = "https://www.claude.com";
link2.target = "_blank";
link2.classList = "new";
console.log(link2.classList);

link2.style.background = "gold";
link2.style.textDecoration = "none";

div.insertBefore(link2, newElement0);

//dom tree  downwards
let newUl = document.querySelector("ul");
let newLi = newUl.querySelector("li");

//or
let newList = newUl.children[1];

//to Parent  -- upwards
let secondLi = document.querySelector("li");
let parent = secondLi.parentElement;

//siblings
let sib1 = document.querySelector("li");
let firstSib = sib1.nextElementSibling;

let secondSib = firstSib.nextElementSibling;
console.log(secondSib);

// sideways

let lastLi = document.querySelectorAll("li")[2];
let previousImmediate = lastLi.previousElementSibling;
console.log(previousImmediate);
let previousLast = previousImmediate.previousElementSibling;
console.log(previousLast);

// child to parent to children  ---parent-children-index
const lastLis = document.querySelector("li");
const parents = lastLis.parentElement;
const childens = parents.children[2];
console.log(childens);
