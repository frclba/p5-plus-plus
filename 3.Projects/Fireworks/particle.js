class Particle {
  constructor(x, y, exploded){
    this.exploded = exploded;
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    if(this.exploded){
      this.vel = createVector(0, random(-12, -3));
    }
    else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(1,5));
    }
  }

  applyForce(force){
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render(){
    point(this.pos.x, this.pos.y);
  }
}
