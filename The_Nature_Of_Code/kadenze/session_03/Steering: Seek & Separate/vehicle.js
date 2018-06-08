function Vehicle(x, y, n){
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.r = n;
  this.maxspeed = 10;
  this.maxforce = 0.2;


  this.applyBehaviors = function(vehicles){
    let separateForce = this.separate(vehicles);
    let seekForce = this.seek(createVector(mouseX, mouseY));

    seekForce.mult(1);
    separateForce.mult(1);

    this.applyForce(separateForce);
    this.applyForce(seekForce);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.separate = function(vehicles){
    let desiredSeparation = 20;
    let sum = createVector();
    let count = 0;

    for (let i = 0; i < vehicles.length; i++){
      let d = p5.Vector.dist(this.pos, vehicles[i].pos);
      if((d > 0) && (d < desiredSeparation)){
        let diff = p5.Vector.sub(this.pos, vehicles[i].pos);
        diff.normalize();
        diff.div(d);
        sum.add(diff);
        count++;
      }
    }
    if(count > 0){
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);

      // Steering = Desired - Velocity
      sum.sub(this.vel);
      sum.limit(this.maxforce);
    }
    return sum;
  }

  this.seek = function(target){
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);

    let steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxforce);
    return steering;
  }


  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.set(0.0);
  }

  this.borders = function() {
    if (this.pos.x < -this.r) this.pos.x =  width+this.r;
    if (this.pos.y < -this.r) this.pos.y = height+this.r;
    if (this.pos.x >  width+this.r) this.pos.x = -this.r;
    if (this.pos.y > height+this.r) this.pos.y = -this.r;
  }

  this.display = function(){
    fill(255, 99, 77);
    strokeWeight(3);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, n, n);
  }
}
