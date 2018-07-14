class Particle {
  constructor(x,y, mass){
    this.pos = createVector(x, y);
    this.vel = createVector(1,0);
    this.acc = createVector(0,0);
    this.mass = 1+mass;
  }
  //newtown's 2 law f = m*a
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  checkEdges() {
    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x *= -1;
    } else if (this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
    }
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
  }

  show() {
    fill(0);
    stroke(255, 77, 99);
    strokeWeight(2*this.mass);
    ellipse(this.pos.x, this.pos.y, 69*1/this.mass);
  }
}
