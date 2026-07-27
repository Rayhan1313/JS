/*

for (let i = 0; i < 4; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    const text = this.innerHTML;
    console.log(text);
    playAudio(text);
    playAnimation(text);
  });
}

document.addEventListener("keypress", function (event) {
  console.log(event.key);
  let text = event.key;
  playAudio(text);

  playAnimation(text);
});

*/

/*       **************              keypress example                             *************** */
let pTag = document.querySelector("p");
let tTag = document.querySelector("textarea");
// // document.addEventListener("keypress", function (e) {
// //   let text = e.key;
// //   pTag.innerHTML = "You have pressed " + text;
// // });

// let count = 0;
// tTag.addEventListener("keypress", function (e) {
//   let text = e.key;
//   count++;
//   pTag.innerHTML = "You have pressed total " + count;
// });
