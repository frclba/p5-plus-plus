function Mover(speedX, speedY) {
  this.position = new p5.Vector(random(width), random(height));
  this.velocity = new p5.Vector(random(-5, 5), random(-1, 1));
  this.acceleration = new p5.Vector(-0.001, 0.01);
  this.topspeed = 10;

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity)
  }

  this.display = function() {
    // Display circle at x position
    stroke(0);
    strokeWeight(2);

    // fill(this.position.x, 0, this.position.y);
    fill(0);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  this.checkEdges = function(){
    if (this.position.x > width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
};
