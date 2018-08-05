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


function selectDOMs(){
  speedSlider = select('#speedSlider');
  speedSpan = select('#speedSpan');
  highScoreSpan = select('#highScoreSpan');
  allTimeHighScoreSpan = select('#allTimeHighScoreSpan');
  runBestButton = select('#speedSlider');
}

function createBirds(){
  for(let i = 0; i < totalPopulation; i++){
    let bird = new Bird();
    activeBirds[i] = bird;
    allBirds[i] = bird;
  }
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


function draw(){
  background(0);
  let cycles = speedSlider.value();
  speedSpan.html(cycles);

  for(let n = 0; n < cycles; n++){
    for(let i = pipes.length - 1; i >= 0; i--){
      pipes[i].update();
      if(pipes[i].offscreen()){
        pipes.splice(i, 1);
      }
    }

    if(runBest){
      bestBird.think(pipes);
      bestBird.update();
      for(let j = 0; j < pipes.length; j++){
        if(pipes[j]. hits(bestBird)){
          resetGame();
          break;
        }
      }
      if(bestBird.bottomTop()){
        resetGame();
      }
    }
    else{
      for(let i = activeBirds.length - 1; i >= 0; i--){
        let bird = activeBirds[i];
        bird.think(pipes);
        bird.update();

        for(let j = 0; j < pipes.length; j++){
          if(pipes[j].hits(activeBirds[i])){
            activeBirds.splice(i, 1);
            break;
          }
        }
        if(bird.bottomTop()){
          activeBirds.splice(i, 1);
        }
      }
    }

    if(counter % 75 == 0){
      pipes.push(new Pipe());
    }
    counter++;
  }


  let tempHighScore = 0;
  if(!runBest){
    let tempBestBird = null;
    for(let i = 0; i < activeBirds.length; i++){
      let s = activeBirds[i].score;
      if(s > tempHighScore){
        tempHighScore = s;
        tempBestBird = activeBirds[i];
      }
    }

    if(tempHighScore > highScore){
      highScore = tempHighScore;
      bestBird = tempBestBird;
    }
  }
  else{
    tempHighScore = bestBird.score;
    if(tempHighScore > highScore){
      highScore = tempHighScore;
    }
  }

  highScoreSpan.html(tempHighScore);
  allTimeHighScoreSpan.html(highScore);

  for(let i = 0; i < pipes.length; i++){
    pipes[i].show();
  }

  if(runBest){
    bestBird.show();
  }  else{
    for(let i = 0; i < activeBirds.length; i++){
      activeBirds[i].show();
    }
    if(activeBirds.length == 0){
      nextGeneration();
    }
  }
}
