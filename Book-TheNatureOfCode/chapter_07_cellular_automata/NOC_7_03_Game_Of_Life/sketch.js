let gol;

function setup(){
  createCanvas(640, 360);
  gol = new GameOfLife();
}

function draw(){
  background(252);
  gol.generate();
  gol.display();
}

function mousePressed(){
  gol.initialize();
}
