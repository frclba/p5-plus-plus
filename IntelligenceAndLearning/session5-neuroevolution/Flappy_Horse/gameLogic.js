
function setupSprites(){
  let frames = spritedata.frames;

  for(let i = 0; i< frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
}

function createBirds(){
  for(let i = 0; i < totalPopulation; i++){
    let bird = new Bird("", animation);
    activeBirds[i] = bird;
    allBirds[i] = bird;
  }
}

function updatePipes(){
  for(let i = pipes.length - 1; i >= 0; i--){
    pipes[i].update();
    if(pipes[i].offscreen()){
      pipes.splice(i, 1);
    }
  }
}

function controlActiveBirds(){
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


function controlBestBird(){
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


function showActiveBirds(){
  for(let i = 0; i < activeBirds.length; i++){
    activeBirds[i].show();
  }
  if(activeBirds.length == 0){
    nextGeneration();
  }
}

function defineHighScore(){
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
}
