let mutationRate = 0.3;
let totalPopulation = 100;

let population;
let matingPool;
let target;

let display = "";

function setup(){
  display = createP("STARTING");
  display.class("results");
  display.position(10, 10);

  target = 'to be or not to be';
  population = [];

  for(let i = 0; i < totalPopulation; i++){
    population[i] = new DNA(target.length);
  }
}

function draw(){
  for(let i = 0; i < population.length; i++){
    population[i].calcFitness(target);
  }
  let matingPool = [];

  for(let i = 0; i < population.length; i++){
    let nnn = floor(population[i].fitness * 100);
    for(let j = 0; j < nnn; j++){
      matingPool.push(population[i]);
    }
  }

  for(let i = 0; i < population.length; i++){
    let a = floor(random(matingPool.length));
    let b = floor(random(matingPool.length));
    let partnerA = matingPool[a];
    let partnerB = matingPool[b];

    let child = partnerA.crossover(partnerB);
    child.mutate(mutationRate);
    population[i] = child;
  }

  let everything = "";
  for(let i = 0; i < population.length; i++){
    if (i % 2 == 0)
      everything += "<br>";
      everything += population[i].getPhrase() + "    ";
  }
  textFont("Courier");
  display.html(everything);
}
