let ball;
let spring;


function setup(){
  createCanvas(690, 333);
  setFrameRate(60);

  spring = new Spring(width / 2, 10, 100);
  ball = new Ball(width / 2, 100);
}

function draw(){
  background(51);

  let gravity = createVector(0, 2);
  ball.applyForce(gravity);

  spring.connect(ball);
  spring.constrainLength(ball, 60, 200);

  ball.update();

  spring.displayLine(ball);
  ball.display();
  spring.display();

}


function mousePressed(){
  ball.handleClick(mouseX, mouseY);
}

function mouseDragged(){
  ball.handleDrag(mouseX, mouseY);
}

function mouseReleased(){
  ball.stopDragging();
}
