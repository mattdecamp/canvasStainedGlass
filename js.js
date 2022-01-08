const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "blue";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;

// ctx.fill();

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function drawRect(e) {
  // ctx.rotate((45 * Math.PI) / 180);
  const rectWidth = 150;
  const rectHeight = 100;
  let x = e.clientX - rectWidth / 2;
  let y = e.clientY - rectHeight / 2;

  ctx.beginPath();
  ctx.fillRect(x, y, rectWidth, rectHeight);
  ctx.fill();
}

function drawSquare(e) {
  // ctx.rect(350, 20, 100, 100);
  const squareWidth = 100;
  const squareHeight = 100;
  let x = e.clientX - squareWidth / 2;
  let y = e.clientY - squareHeight / 2;
  ctx.beginPath();
  // ctx.rotate((45 * Math.PI) / 180);
  ctx.fillRect(x, y, squareWidth, squareHeight);
  ctx.fill();
}

function drawCircle(e) {
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 50, 0, 2 * Math.PI);
  ctx.fill();
}

// drawTriangle

function drawTriangle(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const side = 200;
  const height = side * Math.cos(Math.PI / 6);
  // console.log("Height:" + height)
  // Calculate center of Triangle
  console.log("X:" + mouseX, "Y:" + mouseY);
  console.log("Height:" + height);
  const centerY = height * (2 / 3);
  const centerX = side / 2;
  console.log(centerX, centerY);
  // draw triangle
  ctx.beginPath();
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(mouseX + side / 2, mouseY + height);
  ctx.lineTo(mouseX - side / 2, mouseY + height);

  // trying to get it to draw from center

  // ctx.moveTo(mouseX, mouseY);
  // ctx.lineTo(mouseX, mouseY - height);
  // ctx.lineTo(mouseX + side/2, mouseY + height);
  // ctx.lineTo(mouseX - side/2, mouseY + height);
  // ctx.lineTo(mouseX, mouseY - height);

  ctx.closePath();
  ctx.fill();
}

// drawEllipse
//////////////

function drawEllipse(e) {
  const ellipseRadiusX = 50;
  const ellipseRadiusY = 75;
  const ellipseRotation = 0;
  const ellipseStartAngle = 0;
  const ellipseEndAngle = Math.PI * 2;
  ctx.beginPath();
  ctx.ellipse(
    e.clientX,
    e.clientY,
    ellipseRadiusX,
    ellipseRadiusY,
    ellipseRotation,
    ellipseStartAngle,
    ellipseEndAngle
  );
  ctx.fill();
}

// drawTrapezoid()
function drawTrapezoid(e) {
  const rectWidth = 150;
  const rectHeight = 100;
  let x = e.clientX - 14;
  let y = e.clientY;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + rectWidth / 2, y - rectHeight / 2);
  ctx.lineTo(x + rectWidth / 1.3, y + rectHeight / 2);
  ctx.lineTo(x - rectWidth / 2, y + rectHeight / 2);
  ctx.lineTo(x - rectWidth / 4, y - rectHeight / 2);
  ctx.lineTo(x + rectWidth / 2, y - rectHeight / 2);
  // ctx.fillRect(x, y, rectWidth, rectHeight);
  ctx.fill();
}

// drawRhombus()
function drawRhombus(e) {
  const rhombusW = 100;
  const rhombusH = 200;
  let x = e.clientX;
  let y = e.clientY;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - rhombusH / 2);
  ctx.lineTo(x + rhombusW / 2, y);
  ctx.lineTo(x, y + rhombusH / 2);
  ctx.lineTo(x - rhombusW / 2, y);
  ctx.lineTo(x, y - rhombusH / 2);
  ctx.fill();
}

// DRAW POLYGON FUNCTION
////////////////////////

function drawPolygon(x, y, sides) {
  console.log(x,y)
  const size = 100;
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

  for (let i = 1; i <= sides; i += 1) {
    ctx.lineTo(
      x + size * Math.cos((i * 2 * Math.PI) / sides),
      y + size * Math.sin((i * 2 * Math.PI) / sides)
    );
  }

  ctx.stroke();
}

// drawPentagon()
function drawPentagon(e) {
  const sides = 5,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}

// drawHexagon()

function drawHexagon(e) {
  const sides = 6,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}

// drawHeptagon()
function drawHeptagon() {
  const sides = 7,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}

// drawOctagon()

function drawOctagon() {
  const sides = 8,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}



//

canvas.addEventListener("click", drawHexagon);
canvas.addEventListener("mousedown", (e) => {
  console.log(e.clientX, e.clientY);
});

canvas.addEventListener("dblclick", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
