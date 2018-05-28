function Particle(x, y, mass){
  this.position = createVector(x, y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
  this.mass = 1+mass;

  //newtown's 2 law f = m*a
  this.applyForce = function(force){
    this.acceleration.add(force);
  }

  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
	  attractor = new Attractor(width/2, height/2);

    this.acceleration.set(0,0);
  }

  this.show = function(){
    fill(0);
    stroke(255, 77, 99);
    strokeWeight(2*this.mass);
    ellipse(this.position.x, this.position.y, 69*1/this.mass);
  }
}
