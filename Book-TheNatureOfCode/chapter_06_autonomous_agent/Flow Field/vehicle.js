 function Vehicle(x, y, ms, mf){
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 70 || ms;
  this.maxforce = 10 || mf;
  this.r = 4;

  this.run = function(){
    this.update();
    this.borders();
    this.display();
  };

  this.follow = function(flow){
    let desired = flow.lookup(this.pos);
    let steer = p5.Vector.sub(desired, this.vel);

    desired.mult(this.maxspeed);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  };

  this.applyForce = function(force){
    this.acc.add(force);
  };

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.borders = function(){
    if (this.pos.x < -this.r) this.pos.x = width + this.r;
    if (this.pos.y < -this.r) this.pos.y = height + this.r;
    if (this.pos.x > width+this.r) this.pos.x = -this.r;
    if (this.pos.y > height+this.r) this.pos.y = -this.r;
  };

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

    fill(255, 77, 99);
    stroke(0);
    ellipse(0, -this.r*4, this.r*1.5);
    pop();
  };
}
