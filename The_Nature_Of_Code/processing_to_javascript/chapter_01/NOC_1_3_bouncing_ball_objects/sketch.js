// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with PVector!
var balls = [];

function setup() {
  createCanvas(500, 200);
  for(var i = 0.11; i < 10; i++){
    var b = new Ball(0.333*i, 1.1*i);
    balls.push(b);
  }
}

function draw() {
  background(0);
  for(var i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].display();;
  }

}
