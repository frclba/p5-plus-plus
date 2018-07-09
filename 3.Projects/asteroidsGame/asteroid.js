class Asteroid {
  constructor(pos, r){
    let new_pos;
    if(pos)
      new_pos = pos.copy();

    this.pos = new_pos || createVector(random(width), random(height));
    this.r = r * 0.5 || random(15, 50);

    this.totalOfSides = floor(random(5,15));
    this.velocity = p5.Vector.random2D();

    this.offset = [];
    for(let i = 0; i < this.totalOfSides; i++){
      this.offset[i] = random(-this.r, this.r);
    }
  }

  controlAsteroids(){
    this.render();
		this.update();
		this.edges();
  }

  update(){
    this.pos.add(this.velocity);
  }

  render(){
    push();
      noFill();
      stroke(51, 255, 0);
      translate(this.pos.x, this.pos.y);
      // ellipse(0, 0, this.r*2);
      this.makeShape();
    pop();
  }

  makeShape(){
    beginShape();
    for(let i = 0; i < this.totalOfSides; i++){
      let angle = map(i, 0, this.totalOfSides, 0, TWO_PI);
      let x = (this.r + this.offset[i]) * cos(angle);
      let y = (this.r + this.offset[i]) * sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);
  }

  edges(){
    if(this.pos.x > width + this.r){
      this.pos.x = -this.r;
    }
    else if(this.pos.x < - this.r){
      this.pos.x = width + this.r;
    }

    if(this.pos.y > height + this.r){
      this.pos.y = -this.r;
    }
    else if(this.pos.y < - this.r){
      this.pos.y = height + this.r;
    }
  }
  breakUp(){
    let newAsteroids = [];
    newAsteroids[0] = new Asteroid(this.pos, this.r);
    newAsteroids[1] = new Asteroid(this.pos, this.r);
    return newAsteroids;
  }
}
