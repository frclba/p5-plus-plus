function Vehicle(x, y, n){
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 7;
  this.maxforce = 10;
  this.r = 20;

  this.arrive = function(target){
    let desired = p5.Vector.sub(target, this.pos);
    //desired.setMag(this.maxspeed);
    let d = desired.mag();
    if(d < 300){
      let m = map(d, 0, 300, 0, this.maxspeed);
      desired.setMag(m);
    }
    else{
      desired.setMag(this.maxspeed);
    }
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
    let theta = this.vel.heading() + PI / 2;
    fill(255, 99, 77);
    strokeWeight(3);
    stroke(255);

    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    line(0, 0, 0, this.r*5);

    beginShape();
      vertex(0, -this.r * 2);
      vertex(-this.r, this.r * 2);
      vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}
