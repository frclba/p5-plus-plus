let ca;

function setup(){
  createCanvas(690, 400);
  background(51);
  ca = new CellularAutomata();
}

function draw(){
  ca.display();
  if(ca.generation < height/ca.w){
    ca.generate();
  }
}
