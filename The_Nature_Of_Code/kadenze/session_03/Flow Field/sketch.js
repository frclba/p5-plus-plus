var debug = true;

let flowfield;
let vehicles = [];

function setup(){
  createCanvas(640, 360);
  flowfield = new FlowField(20)

  for(let i = 0; i < 33; i++){
    vehicles.push(new Vehicle(random(width), random(height)));
  }
}

function draw(){
  background(51);

  if(debug) flowfield.display();
  for(let i = 0; i < vehicles.length; i++){
    vehicles[i].follow(flowfield);
    vehicles[i].run();
  }
}
function mousePressed(){
  debug = !debug;
}
