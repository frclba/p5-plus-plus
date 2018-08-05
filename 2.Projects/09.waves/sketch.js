var num = 300;
var step;
var sz;
var offSet;
var theta;
var angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  step = 22;
}

function draw() {
  background(20);
  translate(width/2, height*.75);
  angle=0;
  for (var i = 0; i < num; i++) {
		ellipse(50,50,25*i);
    stroke(51, 99, 255);
    noFill();
    sz = i*step;
    var offSet = TWO_PI/num*i;
    var arcEnd = map(sin(theta+offSet),-1,1, PI, TWO_PI);
    arc(0, 0, sz, sz, PI, arcEnd);
  }
  colorMode(RGB);
  resetMatrix();
  theta += .0523;

}
