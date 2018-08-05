function resetGame(){
  counter = 0;
  if(bestBird){
    bestBird.score = 0;
  }
  pipes = [];
}

function nextGeneration(){
  resetGame();
  normalizeFitness(allBirds);
  activeBirds = generate(allBirds);
  allBirds = activeBirds.slice();
}

function generate(oldBirds){
  let newBirds = [];
  for(let i = 0; i < oldBirds.length; i++){
    let bird = poolSelection(oldBirds);
    newBirds[i] = bird;
  }
  return newBirds;
}

function normalizeFitness(birds){

  for (let i = 0; i < birds.length; i++) {
   birds[i].score = pow(birds[i].score, 2);
 }

  let sum = 0;
  for(let i = 0; i < birds.length; i++){
    sum += birds[i].score;
  }
  for(let i = 0; i < birds.length; i++){
    birds[i].fitness = birds[i].score / sum;
  }
}

function poolSelection(birds){
  let index = 0;
  let r = random(1);

  while (r > 0) {
    r -= birds[index].fitness;
    index += 1;
  }

  index -= 1;
  return birds[index].copy();
}
