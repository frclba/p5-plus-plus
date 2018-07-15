let amplitude = 200;
let period = 0;

function setup(){
  createCanvas(690, 690);
}

function draw(){
  background(255);
  translate(width/2, height/2);

  let x = amplitude * sin(period);
  let y = amplitude * cos(period);
  fill(127);
  stroke(0);
  line(0,0,x,y);
  ellipse(x, y, 36);
  period += 0.03;
}
