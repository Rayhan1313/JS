// let images = [
//   "../images/1.jpg",
//   "../images/2.jpg",
//   "../images/3.jpg",
//   "../images/4.jpg",
//   "../images/4.jpg",
//   "../images/5.jpg",
//   "../images/321.jpg",
// ];
// let imagesFind = document.querySelector("img");

// let count = 0;

// function prev() {
//   count--;

//   if (count < 0) {
//     count = images.length - 1;
//   }
//   imagesFind.src = images[count];
// }

// function next() {
//   count++;
//   if (count >= images.length) {
//     count = 0;
//   }
//   imagesFind.src = images[count];
// }

const images = [
  "../images/1.jpg",
  "../images/2.jpg",
  "../images/3.jpg",
  "../images/321.jpg",
  "../images/4.jpg",
  "../images/5.jpg",
];

const img = document.querySelector("img");

let count = 0;
function prev() {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  img.src = images[count];
}

function next() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  img.src = images[count];
}
