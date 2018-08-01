class ActivationFunction{
  constructor(func, dfunc){
    this.func = func;
    this.dfunc = dfunc;
  }
}

let sigmoid = new ActivationFunction(
  x => 1 / (1 + Math.exp(-x)),
  y => y * (1 - y)
);

let tanh = new ActivationFunction(
  x => Math.tanh(x),
  y => 1 - (y * y)
);

class NeuralNetwork{
  constructor(in_nodes, hid_nodes, out_nodes){
    if(in_nodes instanceof NeuralNetwork){
      /*
      * if first argument is a NeuralNetwork the constructor clones it
      * USAGE: cloned_nn = new NeuralNetwork(to_clone_nn);
      */
      let a = in_nodes;
      this.input_nodes = a.input_nodes;
      this.hidden_nodes = a.hidden_nodes;
      this.output_nodes = a.output_nodes;

      this.weights_ih = a.weights_ih.copy();
      this.weights_ho = a.weights_ho.copy();

      this.bias_h = a.bias_h.copy();
      this.bias_o = a.bias_o.copy();
    }

    else{
      this.input_nodes = in_nodes;
      this.hidden_nodes = hid_nodes;
      this.output_nodes = out_nodes;

      this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
      this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
      this.weights_ih.randomize();
      this.weights_ho.randomize();

      this.bias_h = new Matrix(this.hidden_nodes, 1);
      this.bias_o = new Matrix(this.output_nodes, 1);
      this.bias_h.randomize();
      this.bias_o.randomize();
    }

    this.setLearningRate();
    this.setActivationFunction();
  }


  predict(input_array){

  }

  setLearningRate(learning_rate = 0.1){

  }

  setActivationFunction(func = sigmoid){

  }

  train(input_array, target_array){

  }

  serialize(){

  }

  static deserialize(data){
  }

  copy(){

  }

  mutate(func){

  }
}
