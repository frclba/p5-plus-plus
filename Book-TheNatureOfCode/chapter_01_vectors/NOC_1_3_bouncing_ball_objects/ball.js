function Ball(speedX, speedY) {
  this.position = new p5.Vector(100, 100);
  this.velocity = new p5.Vector(speedX, speedY);

  this.update = function() {
    // Add the current speed to the position.
    this.position.add(this.velocity);
    if ((this.position.x > width) || (this.position.x < 0)) {
        this.velocity.x =   this.velocity.x * -1;
    }
    if ((this.position.y > height) || (this.position.y < 0)) {
        this.velocity.y =   this.velocity.y * -1;
    }
  }

  this.display = function() {
    // Display circle at x position
    stroke(255);
    fill(0);
    ellipse(this.position.x, this.position.y, 16, 16);
  }
};
