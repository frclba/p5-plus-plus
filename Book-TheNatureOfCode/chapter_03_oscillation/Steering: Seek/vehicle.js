function Vehicle(x, y, n){
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 7;
  this.maxforce = 0.3;

  this.seek = function(target){
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);

    let steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxforce);
    this.applyForce(steering);

  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

    this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.set(0.0);
  }
  this.display = function(){
    fill(255, 99, 77);
    strokeWeight(3);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 63, 63);
  }
}
