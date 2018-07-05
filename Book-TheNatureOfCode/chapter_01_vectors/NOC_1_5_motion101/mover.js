function Mover(speedX, speedY) {
  this.position = new p5.Vector(random(width), random(height));
  this.velocity = new p5.Vector(random(-4, 4), random(-3, 3));

  this.update = function() {
    this.position.add(this.velocity)
  }

  this.display = function() {
    // Display circle at x position
    stroke(0);
    strokeWeight(2);

    fill(this.position.x, 0, this.position.y);
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
