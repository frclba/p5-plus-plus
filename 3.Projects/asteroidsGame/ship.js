class Ship {
  constructor(x, y){
    this.pos = createVector(x, y);
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
      noFill();
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
}
