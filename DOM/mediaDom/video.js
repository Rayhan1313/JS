const video = document.querySelector("video");
video.addEventListener("canplay", function () {
  console.log("ready");
});

video.addEventListener("play", function () {
  console.log("play");
});

video.addEventListener("pause", function () {
  console.log("pause");
});

video.addEventListener("playing", function () {
  console.log("playing");
});

video.addEventListener("volumechange", function () {
  console.log("voulumechange");
});

video.addEventListener("ended", function () {
  console.log("ended");
  alert("Thanks for watching");
});
