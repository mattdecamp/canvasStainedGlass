const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// select shape type
const shapes = document.getElementById("shapes");
// base size for each shape
const sizeInput = document.getElementById("size");
let size = 100;
// color and stroke
const color = document.getElementById("color");
const stroke = document.getElementById("stroke");
// rotation
const rotationInput = document.getElementById("rotation");
let rotation = 0;
// canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// shape style properties and defaults
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
ctx.strokeStyle = "silver";
ctx.fillStyle = "pink";

////////////////////
// Shape Drawing Functions
////////////////////

function drawRect(e) {
  const rectHeight = size * 1.7;
  const rectWidth = rectHeight + rectHeight * 0.5;
  const x = e.clientX - rectWidth / 2;
  const y = e.clientY - rectHeight / 2;
  ctx.beginPath();
  ctx.translate(e.clientX, e.clientY);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-e.clientX, -e.clientY);
  ctx.rect(x, y, rectWidth, rectHeight);
  ctx.stroke();
  ctx.fill();
}

// drawSquare
////////////////////

function drawSquare(e) {
  const sqSize = size * 1.7;
  const x = e.clientX - sqSize / 2;
  const y = e.clientY - sqSize / 2;
  ctx.beginPath();
  ctx.translate(e.clientX, e.clientY);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-e.clientX, -e.clientY);
  ctx.rect(x, y, sqSize, sqSize);
  ctx.stroke();
  ctx.fill();
}

// drawCircle
////////////////////

function drawCircle(e) {
  ctx.beginPath();
  ctx.translate(e.clientX, e.clientY);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-e.clientX, -e.clientY);
  ctx.arc(e.clientX, e.clientY, size * 0.85, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

// drawEllipse
////////////////////

function drawEllipse(e) {
  const ellipseRadiusX = size / 2;
  const ellipseRadiusY = size / 2 + size * 0.5;
  const ellipseRotation = 0;
  const ellipseStartAngle = 0;
  const ellipseEndAngle = Math.PI * 2;
  ctx.beginPath();
  ctx.translate(e.clientX, e.clientY);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-e.clientX, -e.clientY);
  ctx.ellipse(
    e.clientX,
    e.clientY,
    ellipseRadiusX,
    ellipseRadiusY,
    ellipseRotation,
    ellipseStartAngle,
    ellipseEndAngle
  );
  ctx.stroke();
  ctx.fill();
}

// drawTrapezoid()
////////////////////

function drawTrapezoid(e) {
  const rectWidth = size * 2;
  const rectHeight = size * 2 * (2 / 3);
  let x = e.clientX - 14;
  let y = e.clientY;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + rectWidth / 2, y - rectHeight / 2);
  ctx.lineTo(x + rectWidth / 1.3, y + rectHeight / 2);
  ctx.lineTo(x - rectWidth / 2, y + rectHeight / 2);
  ctx.lineTo(x - rectWidth / 4, y - rectHeight / 2);
  ctx.lineTo(x + rectWidth / 2, y - rectHeight / 2);
  ctx.stroke();
  ctx.fill();
}

// drawRhombus()
////////////////////

function drawRhombus(e) {
  const rhombusW = size;
  const rhombusH = size * 2;
  let x = e.clientX;
  let y = e.clientY;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - rhombusH / 2);
  ctx.lineTo(x + rhombusW / 2, y);
  ctx.lineTo(x, y + rhombusH / 2);
  ctx.lineTo(x - rhombusW / 2, y);
  ctx.lineTo(x, y - rhombusH / 2);
  ctx.stroke();
  ctx.fill();
}

// DRAW POLYGON FUNCTION
////////////////////

function drawPolygon(x, y, sides) {
  console.log(x, y);
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
  for (let i = 1; i <= sides; i += 1) {
    ctx.lineTo(
      x + size * Math.cos((i * 2 * Math.PI) / sides),
      y + size * Math.sin((i * 2 * Math.PI) / sides)
    );
    ctx.stroke();
    ctx.fill();
  }
}

// drawPentagon()
////////////////////

function drawTriangle(e) {
  const sides = 3,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}

function drawPentagon(e) {
  const sides = 5,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}

// drawHexagon()
////////////////////

function drawHexagon(e) {
  const sides = 6,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}

// drawHeptagon()
////////////////////

function drawHeptagon(e) {
  const sides = 7,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}

// drawOctagon()
////////////////////

function drawOctagon(e) {
  const sides = 8,
    x = e.clientX,
    y = e.clientY;
  drawPolygon(x, y, sides);
}

// drawShape
////////////////////

function drawShape(e) {
  if (shapes.value === "triangle") {
    drawTriangle(e);
  } else if (shapes.value === "square") {
    drawSquare(e);
  } else if (shapes.value === "rectangle") {
    drawRect(e);
  } else if (shapes.value === "circle") {
    drawCircle(e);
  } else if (shapes.value === "ellipse") {
    drawEllipse(e);
  } else if (shapes.value === "pentagon") {
    drawPentagon(e);
  } else if (shapes.value === "hexagon") {
    drawHexagon(e);
  } else if (shapes.value === "heptagon") {
    drawHeptagon(e);
  } else if (shapes.value === "octagon") {
    drawOctagon(e);
  } else if (shapes.value === "rhombus") {
    drawRhombus(e);
  } else {
    drawTrapezoid(e);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

////////////////////
// Event Listeners
////////////////////

// draw shapes on click
canvas.addEventListener("click", drawShape);
// clear canvas on double click
canvas.addEventListener("dblclick", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
// update color value upon change
color.addEventListener("change", () => {
  ctx.fillStyle = color.value;
});
// update stroke size upon change
stroke.addEventListener("input", () => {
  ctx.lineWidth = stroke.value;
});
// update shape size upon change
sizeInput.addEventListener("input", () => {
  console.log(sizeInput.value);
  size = sizeInput.value;
});
// update rotation upon change
rotationInput.addEventListener("input", () => {
  console.log(rotationInput.value);
  rotation = rotationInput.value;
  console.log(rotation);
});
