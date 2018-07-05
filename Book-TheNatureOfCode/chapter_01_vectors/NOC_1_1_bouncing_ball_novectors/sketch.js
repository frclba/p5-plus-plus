//// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-1: Bouncing Ball, no vectors
var x = 100;
var y = 100;
var xspeed = 6;
var yspeed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
}

function draw() {
  background(255);

  // Add the current speed to the position.
  x += xspeed;
  y += yspeed;

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }


  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, y, 48, 48);
}
