/*
*TODO ->
** maybe // OPTIMIZE:
** Insert Images and other stuff
*
*/

let totalPopulation = 500;

let activeBirds = [];
let allBirds = [];
let pipes = [];

// DOM Stuff
let speedSlider;
let speedSpan;
let highScoreSpan;
let allTimeHighScoreSpan;
let runBestButton;

let counter = 0;
let highScore = 0;

let runBest = false;



function setup(){
  let canvas = createCanvas(600, 400);
  canvas.parent('canvascontainer');

  selectDOMs();
  runBestButton.mousePressed(toggleState);

  createBirds();
}



function draw(){
  background(0);
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
