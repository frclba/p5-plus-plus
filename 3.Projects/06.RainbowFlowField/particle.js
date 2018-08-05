class Particle{
  constructor(){
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);

    this.maxSpeed = 4;
    this.hue = 0;
    this.prevPosition = this.position.copy();
  }

  update(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  followField(vectors){
    let x = floor(this.position.x / scale);
    let y = floor(this.position.y / scale);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
    // console.log(force);
  }

  updatePrev(){
    this.prevPosition.x = this.position.x;
    this.prevPosition.y = this.position.y;
  }

  applyForce(force){
    this.acceleration.add(force);
  }

  edges(){
    if (this.position.x > width + 10) {
    this.position.x = 0;
    this.updatePrev();
  }
    if (this.position.x < 0 - 10) {
      this.position.x = width;
      this.updatePrev();
    }
    if (this.position.y > height + 10) {
      this.position.y = 0;
      this.updatePrev();
    }
    if (this.position.y < 0 - 10) {
      this.position.y = height;
      this.updatePrev();
    }
  }

  display(){
    stroke(this.hue, 255, 255, 25);
    // ellipse(this.position.x, this.position.y, 10);
    this.hue += 1;
    if(this.hue > 255){
      this.hue = 0;
    }
    strokeWeight(1);
    line(this.position.x, this.position.y, this.prevPosition.x, this.prevPosition.y);
    this.updatePrev();
  }
}
