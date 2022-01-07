
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
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
  let x = e.clientX - rectWidth/2;
  let y = e.clientY - rectHeight / 2;
  
  ctx.beginPath();
  ctx.fillRect(x, y, rectWidth, rectHeight);
  ctx.fill();
}

function drawSquare(e) {
  // ctx.rect(350, 20, 100, 100);
  const squareWidth = 100;
  const squareHeight = 100;
  let x = e.clientX - squareWidth/2;
  let y = e.clientY - squareHeight/2;
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
  console.log("X:"+ mouseX, "Y:" + mouseY)
  console.log("Height:" + height)
  const centerY = height * (2/3);
  const centerX = side / 2;
  console.log(centerX, centerY)
  // draw triangle
  ctx.beginPath();
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(mouseX + side/2,mouseY + height);
  ctx.lineTo(mouseX - side/2, mouseY + height);

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

function drawEllipse(e) {
  // console.log(e.screenX)
  // console.log(e.screenY)
  ctx.beginPath();
  ctx.ellipse(e.clientX, e.clientY, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

// drawTrapezoid()

// drawPentagon()

// drawOctagon()

// drawHexagon()

// drawRhombus()

// 

canvas.addEventListener('click', drawTriangle)
canvas.addEventListener('mousedown', (e) => {
  console.log(e.clientX, e.clientY)
})

canvas.addEventListener('dblclick', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

