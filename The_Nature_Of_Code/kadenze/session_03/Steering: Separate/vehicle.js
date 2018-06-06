function Vehicle(x, y, n){
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 10;
  this.maxforce = 3;

  this.separate = function(vehicles){
    let desiredSeparation = 32;
    let sum = createVector(0, 0);
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
      let steer = p5.Vector.sub(sum, this.vel);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.borders = function(){
    // if (this.pos.x < 0 || this.pos.x > width)
    //   this.vel *= -1;
    // if (this.pos.y < 0 || this.pos.y > height)
    //   this.vel *= -1;
  };

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
    ellipse(this.pos.x, this.pos.y, n, n);
  }
}
