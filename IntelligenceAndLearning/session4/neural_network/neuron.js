class Neuron {
  constructor(x, y){
    this.position = createVector(x, y);
    this.connections = [];
  }

  addConnection(connection){
    this.connections.push(connection);
  }

  show(){
    stroke(0);
    strokeWeight(1);
    fill(0);
    ellipse(this.position.x, this.position.y, 16);

    for(let i = 0; i < this.connections.length; i++){
      this.connections[i].display();
    }
  }
}
