// (138, 43, 226)
// (230, 230, 250)

let rain = [];

function setup(){
  createCanvas(640, 360);
  for (let i = 0; i < 200; i++){
    let pingo = new Drop(random(0, width), random(-400, -50));
    rain.push(pingo);
  }
}

function draw(){
  background(230, 230, 250);
  for (let i = 0; i < rain.length; i++){
    let pingo = rain[i];
    pingo.fall();
    pingo.show();
    pingo.reset();
  }
}
