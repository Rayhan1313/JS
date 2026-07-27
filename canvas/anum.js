const canvasId = document.getElementById("canId");
canvasId.style.cursor = "pointer";
const pen = canvasId.getContext("2d");

let faceX = canvasId.width / 2 + 10;
let faceY = canvasId.height / 2 + 10;

let mouseX = faceX;
let mouseY = faceY;
let pupilColor = "black";

function face() {
  pen.save();
  pen.beginPath();
  pen.arc(faceX, faceY, 70, 0, Math.PI * 2);
  pen.lineWidth = 8;
  pen.strokeStyle = "black";
  pen.stroke();

  pen.fill();
  pen.restore();
}

function eye(xAxis, yAxis) {
  pen.save();
  pen.beginPath();
  pen.arc(xAxis, yAxis, 15, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.stroke();
  pen.fillStyle = "white";
  pen.fill();

  let dx = mouseX - xAxis;
  let dy = mouseY - yAxis;

  let dist = Math.sqrt(dx ** 2 + dy ** 2) || 1;
  let move = Math.min(7.5, dist);

  pen.beginPath();
  pen.arc(
    xAxis + (dx / dist) * move,
    yAxis + (dy / dist) * move,
    7.5,
    0,
    Math.PI * 2,
  );
  pen.fillStyle = pupilColor;
  pen.fill();
  pen.restore();
}

function halfCircle(xAxis, yAxis) {
  pen.beginPath();
  pen.arc(xAxis, yAxis - 3, 20, 0, Math.PI, true);
  pen.lineWidth = 4;
  pen.strokeStyle = "black";
  pen.stroke();
}

function smile(faceX, faceY) {
  // pen.fillStyle = "black";
  pen.lineWidth = 8;
  pen.strokeStyle = "white";
  pen.strokeRect(faceX - 30, faceY + 15, 60, 0);
  pen.beginPath();
  pen.arc(faceX, faceY + 15, 30, 0, Math.PI);
  pen.fillStyle = "red";
  pen.fill();
  pen.strokeStyle = "black";
  pen.stroke();
}

function render() {
  pen.clearRect(0, 0, 410, 260);

  pen.strokeStyle = "red";
  pen.lineWidth = 4;
  pen.strokeRect(10, 10, 400, 250);

  pen.fillStyle = "yellow";
  pen.fillRect(12, 12, 394, 244);

  face();
  eye(faceX - 35, faceY - 17);
  eye(faceX + 35, faceY - 17);
  halfCircle(faceX - 35, faceY - 17);
  halfCircle(faceX + 35, faceY - 17);
  smile(faceX, faceY);
}

canvasId.addEventListener("mousemove", function (e) {
  let rect = canvasId.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
  render();
});

render();
