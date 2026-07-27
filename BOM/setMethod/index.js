// const buttonSet = document.querySelector(".button-set");
// const counting = document.querySelector(".counting");

// buttonSet.addEventListener("click", timer);

// function timer() {
//   console.log("clicked");
//   let count = 10;
//   counting.textContent = `Count start: ${count}`;

//   setInterval(() => {
//     count--;
//     counting.textContent = `Count start: ${count}`;
//     if (count == 0) {
//         break;
//       counting.textContent = `Congratulation for wait`;

//     }
//   }, 1000);
// }
const findButton = document.getElementsByClassName("button-set")[0];
let countShow = document.getElementsByClassName("counting")[0];

console.log(findButton);
findButton.addEventListener("click", timer);

function timer() {
  const p = document.createElement("p");
  document.body.appendChild(p);
  let count = 10;
  p.textContent = `wait: ${count} sec`;
  const stopInterval = setInterval(function () {
    count--;
    count == 0
      ? (p.textContent = "congratulations!") &&
        setTimeout(function () {
          window.location.reload();
        }, 2000) &&
        clearInterval(stopInterval)
      : (p.textContent = `wait: ${count} sec`);
    // p.textContent = `wait: ${count} sec`;
  }, 1000);
  console.log(stopInterval);
}

// countShow.style.display = "none";
// findButton.addEventListener("click", interval);
// function interval() {
//   const date = new Date();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let second = date.getSeconds();

//   hour = formatting(hour);
//   minutes = formatting(minutes);
//   second = formatting(second);

//   let time = hour + " : " + minutes + " : " + second;
//   countShow.style.display = "flex";
//   countShow.textContent = time;

//   setInterval(interval, 1000);
// }

// function formatting(values) {
//   return values < 10 ? `0${values}` : values;
// }
