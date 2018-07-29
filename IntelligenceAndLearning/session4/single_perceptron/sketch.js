// Simple Perceptron Example
// See: http://en.wikipedia.org/wiki/Perceptron

// Code based on text "Artificial Intelligence", George Luger
// Code based on book "The Nature Of Code", Daniel Shiffman

let training = new Array (2000);
let perceptron;
let count = 0;
let xmin, ymin, xmax, ymax;

function f(x){
  // y = m*x+b;
  let y = 0.3 * x + 0.4;
  return y;
}

function setup(){
  xmin = ymin = -1;
  xmax = ymax = 1;

  console.log(xmin, ymin);
  createCanvas(windowWidth, windowHeight);
  perceptron = new Perceptron(3, 0.00666);

  for(let i = 0; i < training.length; i++){
    let x = random(xmin, xmax);
    let y = random(ymin, ymax);
    let answer = 1;
    if(y < f(x)){
      answer = -1;
    }
    training[i] = {
      input:[x, y, 1],
      output: answer
    };
  }
}

function showTargetLine(){
  strokeWeight(3);
  stroke(255, 0, 255);
  let x1 = map(xmin, xmin, xmax, 0, width);
  let y1 = map(f(xmin), ymin, ymax, height, 0);
  let x2 = map(xmax, xmin, xmax, 0, width);
  let y2 = map(f(xmax), ymin, ymax, height, 0);
  line(x1, y1, x2, y2);
}

function showTrainingLine(){
  stroke(0);
  strokeWeight(2);
  let weights = perceptron.getWeights();
  let x1 = xmin;
  let y1 = (-weights[2] - weights[0] * x1) / weights[1];
  let x2 = xmax;
  let y2 = (-weights[2] - weights[0] * x2) / weights[1];

  x1 = map(x1, xmin, xmax, 0, width);
  y1 = map(y1, ymin, ymax, height, 0);
  x2 = map(x2, xmin, xmax, 0, width);
  y2 = map(y2, ymin, ymax, height, 0);
  line(x1, y1, x2, y2);
}


function draw(){
  background(255);

   // Draw the target line
  showTargetLine();

   // Draw the line based on the current weights
  // Formula is weights[0]*x + weights[1]*y + weights[2] = 0
  showTrainingLine();

  perceptron.train(training[count].input, training[count].output);
  count = (count + 1) % training.length;

  for(let i = 0; i < count; i++){
    stroke(0);
    strokeWeight(1);
    fill(0);
    let guess = perceptron.feedForward(training[i].input);
    if(guess > 0)
      noFill();

    let x = map(training[i].input[0], xmin, xmax, 0, width);
    let y = map(training[i].input[1], ymin, ymax, height, 0);
    ellipse(x, y, 8, 8);
  }
}
