var oldAngle =- 100;
var oldDist, pas;
var n=3;
var see=false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pas = TWO_PI/n;
  background(0);
  stroke(99, 11, 11);
  strokeWeight(9);
}

function draw() {
  if (mouseIsPressed) {
    var an = atan2(mouseY-height/2, mouseX-width/2);
    var d = dist(mouseX, mouseY, width/2, height/2);
    if (oldAngle != -100) {
       translate(width/2, height/2);
      for (var a=0; a<TWO_PI; a+=pas) {
        line(cos(oldAngle+a)*oldDist, sin(oldAngle+a)*oldDist, cos(an+a)*d, sin(an+a)*d);
      }
    }
    oldAngle = an;
    oldDist=d;
 } else {
  oldAngle=-100;
 }
}



function mousePressed() {
  oldAngle = atan2(mouseY-height/2, mouseX-width/2);
  oldDist = dist(mouseX, mouseY, width/2, height/2);
}



function keyReleased() {
  if (key=='+') {
    n++;
  } else if (key=='-') {
    n--;
  } else if (keyCode==10) {
    background(255);
  }
    n=constrain(n, 1, 200);
    pas=TWO_PI/n;
}
