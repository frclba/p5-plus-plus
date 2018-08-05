class Network {
  constructor(){
    this.neurons = [];
    this.connections = [];
  }

  addNeuron(n){
    this.neurons.push(n);
  }

  connect(a, b){
    let connection = new Connection(a, b, random(1));
    a.addConnection(connection);
    this.connections.push(connection);
  }

  feedforward(inputs){
    for(let i = 0; i < inputs.length; i++){
      let neuron = this.neurons[i];
      neuron.feedforward(inputs[i]);
    }
  }

  update(){
    for(let i = 0; i < this.connections.length; i++){
      this.connections[i].update();
    }
  }

  show(){
    for(let i = 0; i < this.neurons.length; i++){
      this.neurons[i].show();
    }
    for(let i = 0; i < this.connections.length; i++){
      this.connections[i].show();
    }
  }
}
