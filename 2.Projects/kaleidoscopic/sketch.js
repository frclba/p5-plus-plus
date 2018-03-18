var oldAngle =- 100;
var oldDist, pas;
var n=3;
var see=false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pas = TWO_PI/n;
  background(0);
  stroke(51);
  strokeWeight(9);
}

function draw() {
  if (mouseIsPressed) {
    var angle = atan2(mouseY-height/2, mouseX-width/2);
    var distance = dist(mouseX, mouseY, width/2, height/2);
    if (oldAngle != -100) {
       translate(width/2, height/2);
      for (var i = 0; i < TWO_PI; i += pas) {
        line(cos(oldAngle + i) * oldDist, sin(oldAngle + i) * oldDist, cos(angle + i) * distance, sin(angle + i) * distance);
      }
    }
    oldAngle = angle;
    oldDist = distance;
 } else {
  oldAngle =- 100;
 }
}

function mousePressed() {
  oldAngle = atan2(mouseY-height/2, mouseX-width/2);
  oldDist = dist(mouseX, mouseY, width/2, height/2);
}



function keyReleased() {
  if (key == '+') {
    n++;
  } else if (key == '-') {
    n--;
  } else if (keyCode==10) {
    background(255);
  }
    n = constrain(n, 1, 200);
    pas = TWO_PI/n;
}
