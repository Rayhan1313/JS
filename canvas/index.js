// const canvasId = document.getElementById("canId");
// const canvasId2 = document.getElementById("canId2");

// const contextTa = canvasId.getContext("2d");

/*
contextTa.beginPath();
contextTa.arc(20, 15, 30, 0, Math.PI * 2);
contextTa.lineWidth = 8;
contextTa.strokeStyle = "yellow";
contextTa.stroke();

// contextTa.strokeStyle = "red";
// contextTa.strokeRect(5, 5, 10, 10);

contextTa.fillStyle = "blue";
contextTa.fillRect(8, 8, 9, 9);

// contextTa.strokeStyle = "red";
// contextTa.strokeRect(20, 5, 10, 10);

contextTa.fillStyle = "blue";
contextTa.fillRect(20, 8, 9, 9);


*/

/*
contextTa.lineWidth = 5;
contextTa.strokeStyle = "black";
contextTa.strokeRect(10, 10, 400, 250);

contextTa.fillStyle = "green";
contextTa.fillRect(10, 10, 398, 248.5);

const clientX = canvasId.width / 2 + 10;
const clientY = canvasId.height / 2 + 10;

const clientNx = clientX / 2;
const clientNy = clientY / 2;

contextTa.beginPath();
contextTa.arc(clientX, clientY, 80, 0, Math.PI * 2, true);
contextTa.fillStyle = "red";
contextTa.fill();
contextTa.stroke();

let eyeColor = "black";

function leftEye(eyeColor) {
  contextTa.beginPath();
  contextTa.arc(clientX - 35, clientY - 25, 10, 0, Math.PI * 2, true);
  contextTa.fillStyle = eyeColor;
  contextTa.strokeStyle = "black";
  contextTa.fill();
  contextTa.stroke();
}
leftEye(eyeColor);

contextTa.beginPath();
contextTa.arc(clientX + 35, clientY - 25, 10, 0, Math.PI * 2, true);
contextTa.fillStyle = "red";
contextTa.fill();
contextTa.stroke();

contextTa.strokeStyle = "black";
const an = contextTa.strokeRect(clientX - 35, clientY + 10, 64, 0);

let pointA = (clientX - 66 + 86) / 2;
let pointB = clientY / 2;
contextTa.beginPath();
contextTa.arc(pointA + 95, pointB + 80, 30, 0, Math.PI, false);
contextTa.fillStyle = "orange";
contextTa.lineWidth = 7;
contextTa.fill();
contextTa.stroke();

setInterval(function () {
  if (eyeColor === "black") {
    eyeColor = "red";
  } else {
    eyeColor = "black";
  }
  leftEye(eyeColor);
}, 2000);
*/

// ================== আগের মতোই: খাতা + কলম ==================
const canvasId = document.getElementById("canId");
const contextTa = canvasId.getContext("2d");

const clientX = canvasId.width / 2 + 10; // মুখের কেন্দ্র (215)
const clientY = canvasId.height / 2 + 10; // (140)

// ================== বদল ১: মাউসের অবস্থান মনে রাখার variable ==================
let mouseX = clientX; // শুরুতে মুখের কেন্দ্রেই তাকিয়ে থাকুক
let mouseY = clientY;

let pupilColor = "black"; // আগের eyeColor-এর নতুন রূপ — এখন মণির রং

// ================== বদল ২: দুই স্তরের চোখ (সাদা বল + মণি) ==================
function drawEye(ex, ey) {
  // স্তর ১: সাদা চোখের বল
  contextTa.beginPath();
  contextTa.arc(ex, ey, 10, 0, Math.PI * 2);
  contextTa.fillStyle = "white";
  contextTa.fill();
  contextTa.lineWidth = 2;
  contextTa.strokeStyle = "black";
  contextTa.stroke();

  // স্তর ২: মণি — মাউসের দিকে সর্বোচ্চ 4px সরে
  const dx = mouseX - ex;
  const dy = mouseY - ey;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1; // 0 দিয়ে ভাগ ঠেকাতে || 1
  const move = Math.min(4, dist);

  contextTa.beginPath();
  contextTa.arc(
    ex + (dx / dist) * move,
    ey + (dy / dist) * move,
    4,
    0,
    Math.PI * 2,
  );
  contextTa.fillStyle = pupilColor;
  contextTa.fill();
}

// ================== বদল ৩: সব আঁকা এক render()-এ ==================
function render() {
  // ধাপ ১: আগের ফ্রেম মুছে ফেলো (নইলে মণির পুরনো ছাপ থেকে যাবে!)
  contextTa.clearRect(0, 0, canvasId.width, canvasId.height);

  // ধাপ ২: border — তোমার আগের কোড
  contextTa.lineWidth = 5;
  contextTa.strokeStyle = "black";
  contextTa.strokeRect(10, 10, 400, 250);

  // ধাপ ৩: সবুজ ব্যাকগ্রাউন্ড
  contextTa.fillStyle = "green";
  contextTa.fillRect(10, 10, 398, 248.5);

  // ধাপ ৪: লাল মুখ
  contextTa.beginPath();
  contextTa.arc(clientX, clientY, 80, 0, Math.PI * 2, true);
  contextTa.fillStyle = "red";
  contextTa.fill();
  contextTa.stroke();

  // ধাপ ৫: দুই চোখ — একই ফাংশন, শুধু জায়গা আলাদা
  drawEye(clientX - 35, clientY - 25); // বাম চোখ
  drawEye(clientX + 35, clientY - 25); // ডান চোখ

  // ধাপ ৬: মুখের সোজা রেখা — তোমার আগের কোড
  contextTa.strokeStyle = "black";
  contextTa.lineWidth = 5;
  contextTa.strokeRect(clientX - 35, clientY + 10, 64, 0);

  // ধাপ ৭: কমলা হাসি — তোমার আগের কোড
  const pointA = (clientX - 66 + 86) / 2;
  const pointB = clientY / 2;
  contextTa.beginPath();
  contextTa.arc(pointA + 95, pointB + 80, 30, 0, Math.PI, false);
  contextTa.fillStyle = "orange";
  contextTa.lineWidth = 7;
  contextTa.fill();
  contextTa.stroke();
}

render(); // পেজ খোলার সাথে সাথে প্রথম ফ্রেম

// ================== বদল ৪: মাউসের কথা শোনা ==================
canvasId.addEventListener("mousemove", function (e) {
  const rect = canvasId.getBoundingClientRect();
  mouseX = e.clientX - rect.left; // window-হিসাব → canvas-হিসাব
  mouseY = e.clientY - rect.top;
  render(); // নতুন মান দিয়ে নতুন ফ্রেম
});

// ================== তোমার পুরনো পলক — এখন মণির রং বদলায় ==================
setInterval(function () {
  pupilColor = pupilColor === "black" ? "red" : "black";
  render(); // মনে আছে তো? শুধু variable বদলালে হয় না — আবার আঁকতে হয়!
}, 2000);
