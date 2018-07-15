class Pendulum{
  constructor (armLength){
    this.armLength = armLength;
    this.origin = createVector(width/2, 0);
    this.pos = createVector(width/2, this.armLength);
    this.angle = PI/4;
    this.angularVelocity = 0;
    this.angularAcceleration = 0;
  }

  go(){
    this.render();
    this.move();
  }

  move(){
    this.pos.x = this.origin.x + (this.armLength * sin(this.angle));
    this.pos.y = this.origin.y + (this.armLength * cos(this.angle));

    this.angularAcceleration = -GRAVITY * sin(this.angle);

    this.angle += this.angularVelocity;
    this.angularVelocity += this.angularAcceleration;

    this.angularVelocity *= 0.96;
  }

  render(){
    fill(127);
    stroke(0);
    line(this.origin.x, this.origin.y, this.pos.x,this.pos.y);
    ellipse(this.pos.x, this.pos.y, 36);
  }
}
