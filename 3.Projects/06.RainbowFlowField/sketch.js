let particles = [];
let flowField;
let scale = 10;
let increment = 0.09;
let cols;
let rows;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  background(51);

  cols = floor(width / scale);
  rows = floor(height / scale);

  flowField = new FlowField();
  flowField.drawFlowField();

  for(let i = 0; i < 600; i++){
    particles[i] = new Particle();
  }
}

function draw(){

  for(let i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].edges();
    particles[i].display();
    particles[i].followField(flowField.flowArray);
    increment += 0.01;
  }
}
