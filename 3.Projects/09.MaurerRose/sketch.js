function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  noLoop();
  background(51);
  translate(width/2, height/2);
  stroke(255, 0, 255);
  fill(255);
  // noFill();
  drawRose(16, 300);
  // drawMaurerRose(72,60,400);
}

function ran(n)
{
    return Math.ceil(Math.random()*n);
}

function drawRose(n, sc1){
  beginShape();
  for(let angle = 0; angle < TWO_PI; angle += 0.01){
    let r = sin(n * angle);
    let x = sc1 * r * sin(angle);
    let y = sc1 * r * cos(angle);

    vertex(x, y);
  }
  endShape(CLOSE);
}



function drawMaurerRose(n, d, sc1){
  let theta = 0;
  let r;
  let t;
  let newVector = createVector();
  let oldVector = createVector(0, 0);

  beginShape();

  do{
    theta += d;
    if(theta >= 360)
      theta = theta % 360;

    x = radians((n * theta) % 360);
    r = sin(x);
    t = radians(theta);

    newVector.x = r * sin(t);
    newVector.y = r * cos(t);

    vertex(sc1 * oldVector.x, sc1 * oldVector.y);
    vertex(sc1 * newVector.x, sc1 * newVector.y);

    oldVector.x = newVector.x;
    oldVector.y = newVector.y;
  }  while(theta != 0);
  endShape(CLOSE);
}
