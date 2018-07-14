class Attractor   {
  constructor(){
    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
    this.G = 1;
  }

  calculateAttraction(m) {
    // Calculate direction of force
    let force = p5.Vector.sub(this.position, m.position);
    // Distance between objects
    let distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    let strength = (this.G * this.mass * m.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  }

  show() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    if (this.dragging) {
      fill(255);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
  }
}
