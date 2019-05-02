

class Iris {
  // x,y    = the current position
  // ox,oy  = the position, but slightly back in time
  // startX,startY  = start positions
  constructor() {
    this.step = 5;
    this.angle = 0;
    this.NDo = floor(random(360));
    this.radius = 100;

    this.startX = (width / 2) + (this.radius * cos(this.NDo));
    this.startY = (height / 2) + (this.radius * sin(this.NDo));
    this.x = this.startX;
    this.y = this.startY;
    this.oldX = this.x;
    this.oldY = this.y;
  }

  controlIris() {
    let isOutside = false;

    // what happens when x and y hit the outside
    if (this.x < -2) isOutside = true;
    else if (this.x > width + 2) isOutside = true;
    else if (this.y < -2) isOutside = true;
    else if (this.y > height + 2) isOutside = true;

    return isOutside;
  }

  drawIris() {
    this.angle = noise(this.x / noiseScale, this.y / noiseScale) * noiseStrength;

    // Radius change for every cycle
    this.radius = this.rGen();

    // Caclculate new X and Y position
    this.x += cos(this.angle) * this.step;
    this.y += sin(this.angle) * this.step;

    // What happens when x and y hit the outside
    if (this.controlIris()) {
      this.x = this.oldX;
      this.y = this.oldY;
    }
    // Display it
    noFill();
    stroke(255, 0, 255);
    strokeWeight(strokeWidth);
    ellipse(width/2, height/2, 90);
    line(this.oldX, this.oldY, this.x, this.y);
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
    this.NDo = int(random(360));
    this.startX = (width / 2) + (this.radius * cos(this.NDo));
    this.startY = (height / 2) + (this.radius * sin(this.NDo));

    this.x = this.startX;
    this.y = this.startY;
    this.oldX = this.x;
    this.oldY = this.y;
  }

  rGen() {
    let r = random(0.65 / 2, 1.5) * rTemp;
    return r;
  }

}
