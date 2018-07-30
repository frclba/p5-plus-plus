class Network {
  constructor(){
    this.neurons = [];
  }

  addNeuron(n){
    this.neurons.push(n);
  }

  connect(a, b){
    let connection = new Connection(a, b, random(1));
    a.addConnection(connection);
  }

  show(){
    for(let i = 0; i < this.neurons.length; i++){
      this.neurons[i].show();
    }
  }
}
