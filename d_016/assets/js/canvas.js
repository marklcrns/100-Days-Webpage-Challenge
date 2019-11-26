// Youtube Tutorial
// https://www.youtube.com/watch?v=EO6OkltgudE&t=39s

const canvas = document.querySelector("canvas");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

const c = canvas.getContext("2d");
const xCenter = screenWidth / 2;
const yCenter = screenHeight / 2;

const colorPalette = [
  "rgba(200, 100, 255, 0.5)",
  "rgba(100, 100, 205, 0.5)",
  "rgba(150, 250, 150, 0.5)",
  "rgba(250, 200, 50, 0.5)",
  "rgba(255, 100, 90, 0.5)"
];

// Background squares
function squares() {
  const sqr = 100;

  requestAnimationFrame(squares);
  c.fillStyle = colorPalette[0]; // fillStyle applies to objects below it
  c.fillRect(
    sqr / 2 + xCenter - 100 / 2,
    sqr / 2 + yCenter - 100 / 2,
    sqr,
    sqr
  );
  c.fillStyle = colorPalette[1];
  c.fillRect(
    sqr / 2 + xCenter - 300 / 2,
    sqr / 2 + yCenter - 100 / 2,
    sqr,
    sqr
  );
  c.fillStyle = colorPalette[2];
  c.fillRect(
    sqr / 2 + xCenter - 200 / 2,
    sqr / 2 + yCenter - 200 / 2,
    sqr,
    sqr
  );
  c.fillStyle = colorPalette[3];
  c.fillRect(
    sqr / 2 + xCenter - 100 / 2,
    sqr / 2 + yCenter - 300 / 2,
    sqr,
    sqr
  );
  c.fillStyle = colorPalette[4];
  c.fillRect(
    sqr / 2 + xCenter - 300 / 2,
    sqr / 2 + yCenter - 300 / 2,
    sqr,
    sqr
  );
}

// Random integer inclusive generator
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// mouse position
var mouse = {
  x: undefined,
  y: undefined
};

// Mouse listener
window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

function Circle(x, y, dx, dy, margin, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.margin = margin;

  // Circle movements
  var xDirection = randomInt(-1, 1);
  var yDirection = randomInt(-1, 1);
  var xMargin = margin;
  var yMargin = margin;

  var minRadius = 2;
  var maxRadius = 30;
  var radius = randomInt(minRadius, maxRadius);
  var bumpRadius = 10;

  this.draw = function draw() {
    c.beginPath();
    c.arc(this.x, this.y, radius, Math.PI * 2, false);
    c.strokeStyle = "#fff";
    c.stroke();
    c.fillStyle = color;
    c.fill();
  };

  this.update = function update() {
    // Condition if circle touches the edge of screen

    // x direction
    if (this.x + radius >= screenWidth - xMargin) {
      xDirection = -1;
      if ((this.x - radius || this.x + radius) === screenWidth - xMargin) {
        radius = bumpRadius;
      }
    } else if (this.x <= radius + xMargin) {
      xDirection = 1;
      if ((this.x = radius + xMargin)) {
        radius = bumpRadius;
      }
    }

    // x motion
    if (xDirection === 1) {
      this.x += this.dx;
    } else {
      this.x -= this.dx;
    }

    // y direction
    if (this.y + radius >= screenHeight - yMargin) {
      yDirection = -1;
      if (this.y + radius == screenHeight - yMargin) {
        radius = bumpRadius;
      }
    } else if (this.y <= radius + yMargin) {
      yDirection = 1;
      if (this.y == radius + yMargin) {
        radius = bumpRadius;
      }
    }

    // y motion
    if (yDirection === 1) {
      this.y += this.dy;
    } else {
      this.y -= this.dy;
    }

    // Interactive mouse
    // condition if mouse near circle
    var isTouchX = mouse.x - this.x < 70 && mouse.x - this.x > -70;
    var isTouchY = mouse.y - this.y < 70 && mouse.y - this.y > -70;

    if (isTouchX && isTouchY && radius < radius * 2) {
      // if x distance from mouse within 10, grow radius
      if (radius < maxRadius) {
        radius += 1;
      }
    } else if (radius > minRadius) {
      radius += -1;
    }

    this.draw();
  };
}

const circleArray = [];
const margin = 200;

for (let i = 0; i < 300; i++) {
  var x = Math.random() * screenWidth;
  var y = Math.random() * screenHeight;
  var dx = randomInt(0.5, 1);
  var dy = randomInt(0.5, 1);
  var color = colorPalette[randomInt(0, 4)];

  circleArray.push(new Circle(x, y, dx, dy, margin, color));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, screenWidth, screenHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
squares();
