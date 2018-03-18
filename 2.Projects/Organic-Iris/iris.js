let circles = [];
let protection = 100;

let angle = 0;
let NDo;
let isOutside = false;

class Iris {
  // x,y    = the current position
  // ox,oy  = the position, but slightly back in time
  // sx,sy  = start positions
  constructor() {
    this.step = 5;
    this.NDo = int(random(360));
    this.sx = width/2  + radius * cos(NDo);
    this.sy = height/2 + radius * sin(NDo);
    this.x = this.sx;
    this.y = this.sy;
  }
}

function controlIris(x, y){
 let isOutside = false;

 // what happens when x and y hit the outside
 if (x < -2) isOutside = true;
 else if (x > width + 2) isOutside = true;
 else if (y < -2) isOutside = true;
 else if (y > height + 2) isOutside = true;

 return isOutside;
}

function drawIris(cF) {
  angle = noise(x / noiseScale, y / noiseScale) * noiseStrength;

  ox = x;
  oy = y;

  radius = rGen();

  x += cos(angle) * step;
  y += sin(angle) * step;


  if (controlIris(x, y)) {
    x = ox;
    y = oy;
  }
}

  function printIris() {
  	for(var i = 0; i < circles.length; i++){

  		var circle = circles[i];
      // display it
      noFill();
      stroke(cF, irisAlpha);
      strokeWeight(strokeWidth);
      line(circle.ox, circle.oy, circle.x, circle.y);
    }
  // return boolean to false for next cycle
  isOutside = false;
}

function reDrawIt() {
  // background reset
  fill(bckg);
  rect(-5, -5, width+10, height+10);

  // new noise
  noiseScale = int(random(400, 1700));
  noiseStrength = int(random(25,75));
  noiseDetail(int(random(1, 10)), 0.5);

  // parameters reset
  x = sx;
  y = sy;
  NDo = int(random(360));
  sx = width/2  + radius * cos(NDo);
  sy = height/2 + radius * sin(NDo);
  ox = x;
  oy = y;
}

function rGen() {
  var r = random(0.65/2, 1.5) * rTemp;
  return r;
}
