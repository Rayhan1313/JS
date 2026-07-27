const findButton = document.querySelector(".button-set");
const display = document.querySelector(".counting");

findButton.addEventListener("click", clicking);

function clicking(event) {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  hour = polishing(hour);
  minutes = polishing(minutes);
  second = polishing(second);

  let time = `${hour} : ${minutes} : ${second}`;
  display.style.display = "flex";
  display.textContent = time;

  setInterval(clicking, 1000);
}

function polishing(value) {
  return value < 10 ? `0${value}` : value;
}
