const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// select shape type
const shapes = document.getElementById("shapes");
// base size for each shape
const sizeInput = document.getElementById("size");
console.log(sizeInput.value)
let size = 100;
const color = document.getElementById("color");
const stroke = document.getElementById("stroke");

// canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// draw area properties
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.strokeStyle = "silver";
ctx.fillStyle = "pink";

////////////////////
// Shape Drawing Functions
////////////////////

function drawRect(e) {
  // ctx.rotate((45 * Math.PI) / 180);
  const rectHeight = size * 1.7;
  const rectWidth = rectHeight + rectHeight * 0.5;
  const x = e.clientX - rectWidth / 2;
  const y = e.clientY - rectHeight / 2;

  ctx.beginPath();
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
  ctx.rect(x, y, sqSize, sqSize);
  ctx.stroke();
  ctx.fill();
}

// drawCircle
////////////////////

function drawCircle(e) {
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, size * 0.85, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

// drawTriangle
////////////////////

// function drawTriangle(e) {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   const side = 200;
//   const height = side * Math.cos(Math.PI / 6);
//   // console.log("Height:" + height)
//   // Calculate center of Triangle
//   console.log("X:" + mouseX, "Y:" + mouseY);
//   console.log("Height:" + height);
//   const centerY = height * (2 / 3);
//   const centerX = side / 2;
//   console.log(centerX, centerY);
//   // draw triangle
//   ctx.beginPath();
//   ctx.moveTo(mouseX, mouseY);
//   ctx.lineTo(mouseX + side / 2, mouseY + height);
//   ctx.lineTo(mouseX - side / 2, mouseY + height);

//   ctx.closePath();
//   ctx.fill();
// }

// drawEllipse
////////////////////

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
  ctx.stroke();
  ctx.fill();
}

// drawTrapezoid()
////////////////////

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
  ctx.stroke();
  ctx.fill();
}

// drawRhombus()
////////////////////

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
}

// Event Listeners

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
  console.log(sizeInput.value)
  size = sizeInput.value;
});
