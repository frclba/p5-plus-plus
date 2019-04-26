let circles = [];
let protection = 100;

let angle = 0;
let NDo;
let isOutside = false;
let radius = 100;

class Iris {
  // x,y    = the current position
  // ox,oy  = the position, but slightly back in time
  // sx,sy  = start positions
  constructor(x, y) {
    this.step = 5;
    this.NDo = floor(random(360));
    this.radius = 100;
    this.sx = width / 2 + this.radius * cos(NDo);
    this.sy = height / 2 + this.radius * sin(NDo);
    this.x = x;
    this.y = y;
  }
  
  controlIris(x, y) {
    let isOutside = false;

    // what happens when x and y hit the outside
    if (x < -2) isOutside = true;
    else if (x > width + 2) isOutside = true;
    else if (y < -2) isOutside = true;
    else if (y > height + 2) isOutside = true;

    return isOutside;
  }

  drawIris(noiseScale) {
    let x = this.x;
    let y = this.y;

    angle = noise(x / noiseScale, y / noiseScale) * noiseStrength;

    let ox = x;
    let oy = y;

    radius = this.rGen();

    x += cos(angle) * this.step;
    y += sin(angle) * this.step;


    if (this.controlIris(x, y)) {
      x = ox;
      y = oy;
    }
  }

  printIris() {
    for (let i = 0; i < circles.length; i++) {

      let circle = circles[i];
      // display it
      noFill();
      stroke(cF, irisAlpha);
      strokeWeight(strokeWidth);
      line(circle.ox, circle.oy, circle.x, circle.y);
    }
    // return boolean to false for next cycle
    isOutside = false;
  }

  reDrawIt() {
    // background reset
    fill(255);
    rect(-5, -5, width + 10, height + 10);

    // new noise
    noiseScale = int(random(400, 1700));
    noiseStrength = int(random(25, 75));
    noiseDetail(int(random(1, 10)), 0.5);

    // parameters reset
    this.x = this.sx;
    this.y = this.sy;
    this.NDo = int(random(360));
    this.sx = width / 2 + radius * cos(NDo);
    this.sy = height / 2 + radius * sin(NDo);
    this.ox = this.x;
    this.oy = this.y;
  }

  rGen() {
    let r = random(0.65 / 2, 1.5) * rTemp;
    return r;
  }

}
