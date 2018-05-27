function Particle(){
  this.pos = createVector(windowWidth/2, windowHeight/2);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0,0);
  }
  this.edges = function(){
    if(this.pos.y > windowHeight){
      this.vel.y *= -1;
      this.pos.y = height
    }
    if( this.pos.x > windowWidth || this.pos.x < 0){
      this.vel.x *= -1;
      this.pos.x = windowWidth
    }

  }
  this.show = function(){
    fill(0);
    stroke(255, 77, 99);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, 33);

  }

}
