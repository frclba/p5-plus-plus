let X1 = 200;
let Y1 = 200;
let X2 = 220;
let Y2 = 160;
let X3 = 240;
let Y3 = 200;

function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
	background(51);
	drawTriangle();
}

//
function drawTriangle() {
	fill(255, 33, 99);
	stroke(255);
	strokeWeight(3);
	triangle(X1, Y1, X2, Y2, X3, Y3);
}

//
function keyPressed() {
  if (keyCode == UP_ARROW) {
    Y1 -= 3;
    Y2 -= 3;
    Y3 -= 3;
  }
  else if (keyCode == DOWN_ARROW) {
    Y1 += 3;
    Y2 += 3;
    Y3 += 3;
  }
  else if (keyCode == RIGHT_ARROW) {
    X1 += 3;
    X2 += 3;
    X3 += 3;
  }
  else if (keyCode == LEFT_ARROW) {
    X1 -= 3;
    X2 -= 3;
    X3 -= 3;
  }
}
