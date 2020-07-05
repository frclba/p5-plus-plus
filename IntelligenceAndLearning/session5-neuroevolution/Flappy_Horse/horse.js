function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}

class Horse {
  constructor(soul, body){
    this.x = 64;
    this.y = height/2;
    
    this.gravity = 0.8;
    this.lift = -12;
    this.velocity = 0;
    
    this.body = body;
    this.r = 12;;
    this.len = this.body.length;
    this.index = 0;
    
    if(soul instanceof NeuralNetwork){
      this.soul = soul.copy();
      this.soul.mutate(mutate)
    }
    else{
      this.soul = new NeuralNetwork(5, 8, 2);
    }

    this.score = 0;
    this.fitness = 0;
  }


  copy(){
    return new Horse(this.soul, this.body);
  }

  show(){
    fill(255, 100);
    stroke(255);
    ellipse(this.x, this.y, this.r * 2);
    let index = floor(this.index) % this.len;
    
    if(this.body[index])    
      image(this.body[index], (this.x-96), (this.y-72));
    
      this.index += random(0.1, 0.3);
  }

  think(pipes){
    // find the closest pipe
    let closest = null;
    let record = Infinity;
    for(let i = 0; i < pipes.length; i++){
      let diff = pipes[i].x - this.x;
      if(diff > 0 && diff < record){
        record = diff;
        closest = pipes[i];
      }
    }
    // Create inputs on neural network
    if(closest != null){
      let inputs = [];
      inputs[0] = map(closest.x, this.x, width, 0, 1);       // x position of closest pipe
      inputs[1] = map(closest.top, 0, height, 0, 1);         // top of closest pipe opening
      inputs[2] = map(closest.bottom, 0, height, 0, 1);      // bottom of closest pipe opening
      inputs[3] = map(this.y, 0, height, 0, 1);              // horse's y position
      inputs[4] = map(this.velocity, -5, 5, 0, 1);           // horse's y velocity

      let action = this.soul.predict(inputs);
      if (action[1] > action[0]){  // Decide to jump or not!
        this.up();
      }
    }
  }

  // JUMP
  up(){
    this.velocity += this.lift;
  }

  bottomTop(){
    return (this.y > height-10 || this.y < -10);
  }

  update(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.score++;
  }
}
