class Laser {
  constructor(shipPosition, shipHeading){
    this.pos = createVector(shipPosition.x, shipPosition.y);
    this.vel = p5.Vector.fromAngle(shipHeading);
    this.vel.mult(6);
  }

  controlLasers(){
    this.render();
		this.update();
  }

  update(){
    this.pos.add(this.vel);
  }

  render(){
    push();
      stroke(255, 0, 255);
      strokeWeight(3);
      point(this.pos.x, this.pos.y);
    pop();
  }

  hits(asteroid){
    let distance = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);

    return (distance < asteroid.r);
  }

  offscreen(){
    if(this.pos.x > width || this.pos.x < 0){
      return true;
    }
    if(this.pos.y > height || this.pos.y < 0){
      return true;
    }
    return false;
  }
}
