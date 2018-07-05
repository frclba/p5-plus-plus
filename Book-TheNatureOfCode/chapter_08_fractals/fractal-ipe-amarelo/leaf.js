function Leaf(pos) {

  this.pos = pos.copy();
  this.vel = createVector(0, 0);
  this.acc = createVector(0, random(0, 0.1));

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    noStroke();
    fill(255, 0, 250, 100);
    ellipse(this.pos.x, this.pos.y, 6, 6);
  }
}
