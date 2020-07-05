
function setupSprites(){
  let frames = spritedata.frames;

  for(let i = 0; i< frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
}

function createHorses(){
  for(let i = 0; i < totalPopulation; i++){
    let horse = new Horse("", animation);
    activeHorses[i] = horse;
    allHorses[i] = horse;
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

function controlActiveHorses(){
  for(let i = activeHorses.length - 1; i >= 0; i--){
    let horse = activeHorses[i];
    horse.think(pipes);
    horse.update();

    for(let j = 0; j < pipes.length; j++){
      if(pipes[j].hits(activeHorses[i])){
        activeHorses.splice(i, 1);
        break;
      }
    }
    if(horse.bottomTop()){
      activeHorses.splice(i, 1);
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


function showActiveHorses(){
  activeHorses.map(horse => {
    horse.show();
  })
  if(activeHorses.length == 0){
    nextGeneration();
  }
}

function defineHighScore(){
  let tempHighScore = 0;
  if(!runBest){
    let tempBestBird = null;
    activeHorses.map(horse => {
      let s = horse.score;
      if(s > tempHighScore){
        tempHighScore = s;
        tempBestBird = horse;
      }
    })  

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
