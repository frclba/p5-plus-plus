/*
*TODO ->
** maybe // OPTIMIZE:
** Insert Images and other stuff
*
*/

let totalPopulation = 333;

let activeBirds = [];
let allBirds = [];
let pipes = [];

// DOM Stuff
let speedSlider;
let speedSpan;
let highScoreSpan;
let allTimeHighScoreSpan;
let runBestButton;


//Sprites Stuff
let sprtesheet;
let spritedata;
let animation = [];


let counter = 0;
let highScore = 0;

let runBest = false;

function preload(){
  spritedata = loadJSON('media/horse.json');
  spritesheet = loadImage('media/horse.png');
}

function setup(){
  let canvas = createCanvas(windowWidth, 400);
  canvas.parent('canvascontainer');
  
  setupSprites();

  selectDOMs();
  runBestButton.mousePressed(toggleState);

  createBirds();
}

function draw(){
  background(190, 166, 140);
  let cycles = speedSlider.value();
  speedSpan.html(cycles);

  for(let n = 0; n < cycles; n++){
    updatePipes();

    if(runBest)      controlBestBird();
    else             controlActiveBirds();

    if(counter % 75 == 0){
      pipes.push(new Pipe());
    }
    counter++;
  }

  defineHighScore();

  for(let i = 0; i < pipes.length; i++){
    pipes[i].show();
  }

  if(runBest)     bestBird.show();
  else            showActiveBirds();
}


function selectDOMs(){
  speedSlider = select('#speedSlider');
  speedSpan = select('#speedSpan');
  highScoreSpan = select('#highScoreSpan');
  allTimeHighScoreSpan = select('#allTimeHighScoreSpan');
  runBestButton = select('#best');
}

function toggleState(){
  runBest = !runBest;
  if(runBest){
    resetGame();
    runBestButton.html('continue training');
  } else{
    nextGeneration();
    runBestButton.html('run best');
  }
}
