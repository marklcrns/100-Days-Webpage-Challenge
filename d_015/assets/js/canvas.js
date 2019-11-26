// Youtube Tutorial
// https://www.youtube.com/watch?v=EO6OkltgudE&t=39s

const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
const xCenter = window.innerWidth / 2;
const yCenter = window.innerHeight / 2;

console.log(canvas);

function squares() {
    var sqr = 100;

    requestAnimationFrame(squares);
    c.fillStyle = "rgba(200, 100, 255, 0.5)"; // fillStyle applies to objects below it
    c.fillRect(
        sqr / 2 + xCenter - 100 / 2,
        sqr / 2 + yCenter - 100 / 2,
        sqr,
        sqr
    );
    c.fillStyle = "rgba(100, 100, 205, 0.5)";
    c.fillRect(
        sqr / 2 + xCenter - 300 / 2,
        sqr / 2 + yCenter - 100 / 2,
        sqr,
        sqr
    );
    c.fillStyle = "rgba(150, 250, 150, 0.5)";
    c.fillRect(
        sqr / 2 + xCenter - 200 / 2,
        sqr / 2 + yCenter - 200 / 2,
        sqr,
        sqr
    );
    c.fillStyle = "rgba(250, 200, 50, 0.5)";
    c.fillRect(
        sqr / 2 + xCenter - 100 / 2,
        sqr / 2 + yCenter - 300 / 2,
        sqr,
        sqr
    );
    c.fillStyle = "rgba(255, 100, 90, 0.5)";
    c.fillRect(
        sqr / 2 + xCenter - 300 / 2,
        sqr / 2 + yCenter - 300 / 2,
        sqr,
        sqr
    );
}

for (let i = 0; i < 100; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let color = `rgb(${r}, ${g}, ${b})`;

    // Arc / Circle
    c.beginPath();
    c.arc(x, y, 10, Math.PI * 2, false);
    c.strokeStyle = color;
    c.stroke();
}

var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var d = 3;
var dx = d;
var dy = d;
var xDirection = 1;
var yDirection = 1;
var shrink = 0;
var xMargin = shrink;
var yMargin = shrink;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    // Arc / Circle
    c.beginPath();
    c.arc(x, y, 50, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();

    // x direction
    if (x + 50 >= window.innerWidth - xMargin) {
        xDirection = -1;
    } else if (x <= 50 + xMargin) {
        xDirection = 1;
    }

    if (xDirection == 1) {
        x += dx;
    } else {
        x -= dx;
    }

    // y direction
    if (y + 50 >= window.innerHeight - yMargin) {
        yDirection = -1;
    } else if (y <= 50 + yMargin) {
        yDirection = 1;
    }

    if (yDirection == 1) {
        y += dy;
    } else {
        y -= dy;
    }
}

animate();
squares();
