// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-3: Vector subtraction

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);

  var mouse = new p5.Vector(mouseX, mouseY);
  var center = new p5.Vector(width/2, height/2);
  mouse.sub(center);

  translate(width/2, height/2);
  strokeWeight(2);
  stroke(255);
  strokeWeight(7)
  line(0, 0, mouse.x, mouse.y);
}
