class Particle {
  constructor(x, y, exploded){
    this.exploded = exploded;
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    this.lifespan = 255;

    if(this.exploded){
      this.vel = createVector(0, random(-60, -30));
    }
    else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(1,6));
    }
  }

  applyForce(force){
    this.acc.add(force);
  }

  update(){
    if(!this.firework){
      this.vel.mult(0.85);
      this.lifespan -= 9;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render(){
    if(!this.firework){
      stroke(255, this.lifespan);
    }

    point(this.pos.x, this.pos.y);
  }

  done(){
    return (this.lifespan < 0);
  }
}
