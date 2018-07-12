let fireworks = [];
let gravity;

function setup(){
  createCanvas(690, 360);
  gravity = createVector(0, 0.2);

  stroke(255);
  strokeWeight(3);
}

function draw(){

  background(0);

  if(random(1) < 0.03){
    fireworks.push(new Firework());
  }
  for(let i = 0; i < fireworks.length; i++){
    fireworks[i].update();
    fireworks[i].show();
  }
}
