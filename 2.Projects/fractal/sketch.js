function setup() {
  createCanvas(640,480);
}

function draw() {
  background(99);
  drawCircle(width/2, height/2, width);
  noLoop();
}

// Very simple function that draws one circle
// and recursively calls itself
var i = 1;
function drawCircle(x,y,r) {
  stroke(255);
  fill(i % 255, i* 2,i += 20);
  ellipse(x, y, r, r);
  if(r > 2) {
    r *= 0.75;
    drawCircle(x, y, r);
  }
}
