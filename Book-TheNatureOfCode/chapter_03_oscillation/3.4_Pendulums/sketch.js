const GRAVITY = 0.02;
let pendulum;

function setup(){
  createCanvas(690, 690);
  let amplitude = 200;
  pendulum = new Pendulum(width/2, amplitude);
}

function draw(){
  background(255);
  pendulum.go();
}
