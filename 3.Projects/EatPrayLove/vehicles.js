class Vehicle{
  constructor(x, y, dna) {
    this.acc = createVector();
    this.vel = createVector(0, -2);
    this.pos = createVector(x, y);

    this.r = 10;
    this.maxspeed = 6;
    this.maxforce = 0.3;
    this.health = 1;
    this.medRand = 0.01;

    this.dna = [];
    if(dna === undefined){
      this.dna[0] = random(-2, 2);
      this.dna[1] = random(-2, 2);
      this.dna[2] = random(0, 100);
      this.dna[3] = random(0, 100);
    }
    else{
      this.dna[0] = dna[0];
      if(random(1) < this.medRand){
        this.dna[0] += random(-0.1, 0.1);
      }

      this.dna[1] = dna[1];
      if (random(1) < this.medRand) {
        this.dna[1] += random(-0.1, 0.1);
      }

      this.dna[2] = dna[2];
      if (random(1) < this.medRand) {
        this.dna[2] += random(-10, 10);
      }

      this.dna[3] = dna[3];
      if (random(1) < this.medRand) {
        this.dna[3] += random(-10, 10);
      }
    }
  }

  eat(list, nutrition, perception){
    let record = Infinity;
    let closest = null;

    for(let i = list.length -1; i >= 0; i--){

      let distance = this.pos.dist(list[i]);
      if(distance < this.maxspeed){
        list.splice(i, 1);
        this.health += nutrition;
      }

      if(distance < record && distance < perception){
        record = distance;
        closest = list[i];
      }
    }

    if(closest != null){
      return this.seek(closest);
    }
    return createVector(0, 0);
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);

    let steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxforce);

    return steering;
  }

  dead(){
    return (this.health < 0);
  }

  behaviors(good, bad){
    let steerGood = this.eat(good, 0.2, this.dna[2]);
    let steerBad = this.eat(bad, -1, this.dna[3]);

    steerGood.mult(this.dna[0]);
    steerBad.mult(this.dna[1]);

    this.applyForce(steerGood);
    this.applyForce(steerBad);
  }

  clone(){
    if(random(1) < 0.002){
      return new Vehicle(this.pos.x, this.pos.y, this.dna);
    }else{
      return null;
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.health -= 0.005;
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    let theta = this.vel.heading() + PI/2;
    let green = color(0, 255, 0);
    let red = color(255, 0, 0);
    let col = lerpColor(red, green, this.health);

    push();
      fill(col);
      stroke(col);
      strokeWeight(3);

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

  boundaries(){
    let distance = 25;
    let desired = null;

    if(this.pos.x < distance){
      desired = createVector(this.maxspeed, this.vel.y);
    } else if(this.pos.x > width - distance){
      desired = createVector(-this.maxspeed, this.vel.y);
    }

    if(this.pos.y < distance){
      desired = createVector(this.vel.x, this.maxspeed);
    } else if(this.pos.y > height - distance){
      desired = createVector(this.vel.x, -this.maxspeed);
    }

    if(desired !== null ){
      desired.normalize();
      desired.mult(this.maxspeed);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  }
}
