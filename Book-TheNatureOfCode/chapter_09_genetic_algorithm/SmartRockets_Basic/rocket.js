class Rocket {
  constructor(position, dna){
    this.acceleration = createVector();
    this.velocity = createVector();
    this.position = position.copy();

    this.radius = 4;
    this.fitness = 0;
    this.dna = dna;

    this.geneCounter = 0;
    this.hitTarget = false;
  }

  calcFitness(){
    let distance = dist(this.position.x, this.position.y, target.x, target.y);
    this.fitness = pow(1/distance, 2);
  }

  run(){
    this.checkTarget();
    if(!this.hitTarget){
      this.applyForce(this.dna.genes[this.geneCounter]);
      this.geneCounter = (this.geneCounter + 1) % this.dna.genes.length;
      this.update();
    }
    this.display();
  }

  checkTarget(){
    let distance = dist(this.position.x, this.position.y, target.x, target.y);
    if(distance < 12){
      this.hitTarget = true;
    }
  }

  applyForce(force){
    this.acceleration.add(force);
  }

  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display(){
    let theta = this.velocity.heading() + PI / 2;
    let radius = this.radius;
    stroke(0);

    push();
    translate(this.position.x, this.position.y);
    rotate(theta);

    rectMode(CENTER);
    fill(0);
    rect(-radius / 2, radius * 2, radius / 2, radius);
    rect(radius / 2, radius * 2, radius / 2, radius);

    fill(255);
    beginShape(TRIANGLES);
    vertex(0, -radius * 2);
    vertex(-radius, radius * 2);
    vertex(radius, radius * 2);
    endShape(CLOSE);

    pop();
  }

  getFitness(){
    return this.fitness;
  }

  getDna(){
    return this.dna;
  }
}
