function playAudio(text) {
  let audio = "";
  switch (text) {
    // case "Google":
    //   audio = new Audio("../audio/google.mp3");
    //   audio.play();
    //   break;
    // case "Huawei":
    //   audio = new Audio("../audio/huawei_ringtone_clasic.mp3");
    //   audio.play();
    //   break;
    case "a":
      audio = new Audio("../audio/iphone.mp3");
      audio.play();
      break;
    case "b":
      audio = new Audio("../audio/nokia.mp3");
      audio.play();
      break;
    case "c":
      audio = new Audio("../audio/samsung_galaxy_s10.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("../audio/sony.mp3");
      audio.play();
      break;
  }
}

function playAnimation(text) {
  let newT = document.querySelector("." + text);
  newT.classList.add("animation");
  setTimeout(function () {
    newT.classList.remove("animation");
  }, 2000);
}
