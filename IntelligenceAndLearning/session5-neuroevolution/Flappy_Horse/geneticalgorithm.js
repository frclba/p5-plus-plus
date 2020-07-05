function resetGame(){
  counter = 0;
  if(bestBird){
    bestBird.score = 0;
  }
  pipes = [];
}

function nextGeneration(){
  resetGame();
  normalizeFitness(allHorses);
  activeHorses = generate(allHorses);
  allHorses = activeHorses.slice();
}

function generate(oldHorses){
  let newHorses = [];
  for(let i = 0; i < oldHorses.length; i++){
    let horse = poolSelection(oldHorses);
    newHorses[i] = horse;
  }
  return newHorses;
}

function normalizeFitness(horses){

  for (let i = 0; i < horses.length; i++) {
   horses[i].score = pow(horses[i].score, 2);
 }

  let sum = 0;
  for(let i = 0; i < horses.length; i++){
    sum += horses[i].score;
  }
  for(let i = 0; i < horses.length; i++){
    horses[i].fitness = horses[i].score / sum;
  }
}

function poolSelection(horses){
  let index = 0;
  let r = random(1);

  while (r > 0) {
    r -= horses[index].fitness;
    index += 1;
  }

  index -= 1;
  return horses[index].copy();
}
