class Asteroid {
  constructor(pos, r, size){
    let new_pos;
    if(pos){
      new_pos = pos.copy();
    }

    this.pos = new_pos || createVector(random(width), random(height));

    this.r = r * 0.5 || random(40, 60);

    this.velocity = p5.Vector.random2D();
    this.totalOfSides = floor(random(5, 15));

    this.size = size;
    switch(size) {
      case 1:
        this.velocity.mult(1.5); break;
      case 0:
        this.velocity.mult(2); break;
    }

    this.offset = [];
    for(let i = 0; i < this.totalOfSides; i++){
      this.offset[i] = random(-this.r * 0.2, this.r * 0.5);
    }

  }

  controlAsteroids(){
    this.render();
		this.update();
		this.edges();
  }

  breakUp(){
    let newAsteroids = [];
    newAsteroids[0] = new Asteroid(this.pos, this.r, 1);
    newAsteroids[1] = new Asteroid(this.pos, this.r, 2);
    return newAsteroids;
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
  playSoundEffect(soundArray){
    console.log(soundArray);
    soundArray[floor(random(0, soundArray.length))].play();
  }


}
