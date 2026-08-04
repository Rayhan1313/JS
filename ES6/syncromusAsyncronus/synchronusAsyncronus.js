// synchronus function  like  firstOne -> secondOne -> thirdOne -> forthOne
let firstOne = () => console.log("this is first One");

let makeItAynchronus = () => {
  console.log("this is second one");
};

let secondOne = () => setTimeout(makeItAynchronus, 5000);
let thirdOne = () => console.log("this is third one");
let forthOne = () => console.log("this is forth Oone");

//aitaake asynchronus korte setTimeout use korbo akhon
//second function ta 2 sec por start hobe but baki gulo run hobe

firstOne();
secondOne();
thirdOne();
forthOne();
