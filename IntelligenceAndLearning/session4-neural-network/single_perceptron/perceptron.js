class Perceptron {

  constructor(weight,  learningConstant){
    this.weights = new Array (weight);

    for(let i = 0; i < this.weights.length; i++){
      this.weights[i] = random (-1, 1);
    }
    this.constant = learningConstant;
  }

  train(inputs, desired){
    let guess = this.feedForward(inputs);
    let error = desired - guess;
    for(let i = 0; i < this.weights.length; i++){
      this.weights[i] += this.constant * error * inputs[i];
    }
  }

  feedForward(inputs){
    let sum = 0;
    for(let i = 0; i < this.weights.length; i++){
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  }

  activate(sum){
    if (sum > 0)
      return 1;
    else
      return -1;
  }

  getWeights(){
    return this.weights;
  }
}
