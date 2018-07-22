class Vehicle{
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 6;
    this.maxforce = 0.3;
    this.r = 10;
  }

  eat(list){
    let record = Infinity;
    let closestIndex = -1;

    for(let i = 0; i < list.length; i++){
      // let distance = dist(this.pos.x, this.pos.y, list[i].x, list[i].y);
      let distance = this.pos.dist(list[i]);
      if(distance < record){
        record = distance;
        closestIndex = i;
      }
    }

    if(record < 5){
      list.splice(closestIndex, 1);
    }
    this.seek(list[closestIndex]);
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);

    let steering = p5.Vector.sub(desired, this.vel);
    return steering;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.set(0.0);
  }

  display() {
    let theta = this.vel.heading() + PI/2;
    fill(255, 99, 77);
    strokeWeight(3);
    stroke(255);

    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    line(0, 0, 0, this.r * 5);

    beginShape();
      vertex(0, -this.r * 2);
      vertex(-this.r, this.r * 2);
      vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}
