const ROWS = 200;
const COLS = 200;

let damping = 0.9;

let current = [];
let previous = [];

function setup(){
  createCanvas(ROWS, COLS);
  initialize();
}

function draw(){
  background(0);
  // stroke(255);
  loadPixels();
  for(let i = 1; i < COLS-1; i++){
    for(let j = 1; j < ROWS-1; j++){

      current[i][j] = (
        previous[i-1][j] +
        previous[i+1][j] +
        previous[i][j-1] +
        previous[i][j+1]) /
        2 - previous[i][j];

      let index = i + j * COLS;
      pixels[index] = color(current[i][j]);
    }
  }
  updatePixels();
}



function initialize(){
  for(let i = 0; i < COLS; i++){
    current[i] = new Array(ROWS);
    previous[i] = new Array(ROWS);
  }
  for(let i = 0; i < COLS; i++){
    for(let j = 0; j < ROWS; j++){
      current[i][j] = 255;
      previous[i][j] = 255;
    }
  }
}
