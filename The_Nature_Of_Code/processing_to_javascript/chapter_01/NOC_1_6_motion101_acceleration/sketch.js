// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with PVector!
var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 10; i++){
    var mover = new Mover();
    balls.push(mover);
  }

}

function draw() {
  background(0);

  for(var i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].checkEdges();
    balls[i].display();
  }
}
