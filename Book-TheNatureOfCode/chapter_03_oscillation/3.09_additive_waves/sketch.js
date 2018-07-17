let xSpacing = 8;
let w;
let maxWaves = 5;

let theta = 0.0;
let amplitude = [];
let dx = [];
let yValues;

function setup(){
  createCanvas(690, 333);
  colorMode(RGB, 255, 255, 255, 100);
  w = width + 16;

  for(let i = 0; i < maxWaves; i++){
    amplitude[i] = random(10, 30);
    let period = random(100, 300);
    dx[i] = (TWO_PI / period) * xSpacing;
  }
  yValues = [];
}

function draw(){
  background(51);
  calcWave();
  renderWave();
}

function calcWave(){
  theta += 0.02;

  for(let i = 0; i < w / xSpacing; i++){
    yValues[i] = 0;
  }

  for(let j = 0; j < maxWaves; j++){
    let x = theta;
    for(let i = 0; i < yValues.length; i++){
      if( j % 2 === 0){
        yValues[i] += sin(x) * amplitude[j];
      }
      else{
        yValues[i] += cos(x) * amplitude[j];
        x += dx[j];
      }
    }
  }
}

function renderWave(){
  noStroke();
  fill(255, 100);

  ellipseMode(CENTER);
  for(let x = 0; x < yValues.length; x++){
    ellipse (x * xSpacing, height / 2 + yValues[x], 16);
  }
}
