class Ship {
  constructor(x, y){
    this.pos = createVector(x, y);
    this.isDestroyed = false;
    this.destroyFrames = 600;
    this.brokenParts = [];

    this.r = 20;
    this.heading = 0;
    this.rotation = 0;
    this.vel = createVector(0, 0);
    this.isBoosting = false;
  }

  controlShip(){
    this.render();
  	this.turn();
  	this.update();
  	this.edges();
  }

  render(){
    push();
      translate(this.pos.x, this.pos.y);
      rotate(this.heading + PI/2);
      fill(0);
      stroke(255, 255, 0);
      triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
  }
  // TURN
  turn(){
    this.heading += this.rotation;
  }

  // ROTATE
  setRotation(angle){
    this.rotation = angle;
  }

  // UPDATE
  update(){
    if(this.isBoosting){
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.95);
  }

  boosting(isBoosting){
    this.isBoosting = isBoosting;
  }

  //BOOST
  boost(){
    let force = p5.Vector.fromAngle(this.heading);
    force.mult(0.9);
    this.vel.add(force);
  }

  edges(){
    if(this.pos.x > width + this.r){
      this.pos.x = -this.r;
    }
    else if(this.pos.x < - this.r){
      this.pos.x = width + this.r;
    }

    if(this.pos.y > height + this.r){
      this.pos.y = -this.r;
    }
    else if(this.pos.y < - this.r){
      this.pos.y = height + this.r;
    }
  }

  hits(asteroid){
    var distance = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    return (distance < this.r + asteroid.r);
  }
  destroy(){
    this.isDestroyed = true;
    for(let i = 0; i < 4; i++){
      this.brokenParts[i] = {
        pos: this.pos.copy(),
        vel: p5.Vector.random2D(),
        heading: random(0, 360),
        rot: random(-0.07, 0.07)
      };
    }
  }
}
