class Neuron {
  constructor(x, y){
    this.position = createVector(x, y);
    this.connections = [];
    this.sum = 0;
    this.radius = 32;
  }


  fire(){
    this.radius = 64;
    for(let i = 0; i < this.connections.length; i++){
      let c = this.connections[i];
      c.feedforward(this.sum);
    }
  }

  feedforward(input){
    this.sum += input;
    if(this.sum > 1){
      this.fire();
      this.sum = 0;
    }
  }


  addConnection(connection){
    this.connections.push(connection);
  }

  show(){
    stroke(0);
    strokeWeight(1);

    let brightness = map(this.sum, 0, 1, 0, 255);
    brightness += map(this.radius, 32, 64, 0, 500);
    fill(brightness);
    ellipse(this.position.x, this.position.y, this.radius);

    this.radius = lerp(this.radius, 32, 0.1);
  }
}
