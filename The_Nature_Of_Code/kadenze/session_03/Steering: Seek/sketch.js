let ball;

function setup(){
  createCanvas(windowWidth, windowHeight);
  ball = new Vehicle(100, 100);
}

function draw(){
  background(51);

  let target = createVector(mouseX, mouseY);

  ball.seek(target);
  ball.update();
  ball.display();
}
