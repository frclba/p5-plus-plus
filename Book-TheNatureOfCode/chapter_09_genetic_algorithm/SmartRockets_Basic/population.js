class Population {
  constructor(mutation, popSize){
    this.mutationRate = mutation;
    this.population = [];
    this.matingPool = [];
    this.generations = 0;

    for(let i = 0; i < popSize; i++){
      let location = createVector(width/2, height + 20);
      this.population[i] = new Rocket(location, new DNA());
    }
  }

  live(){
    for(let i = 0; i < this.population.length; i++){
      this.population[i].run();
    }
  }

  fitness(){
    for(let i = 0; i < this.population.length; i++){
      this.population[i].calcFitness();
    }
  }

  selection(){
    this.matingPool = [];

    let maxFitness = this.getMaxFitness();

    for(let i = 0; i< this.population.length; i++){
      let fitnessNormal = map(this.population[i].getFitness(), 0, maxFitness, 0, 1);
      let norm = floor(fitnessNormal * 100);
      for(let j = 0; j < norm; j++){
        this.matingPool.push(this.population[i]);
      }
    }
  }

  reproduction(){
    for(let i = 0; i < this.population.length; i++){
      let momId = floor(random(this.matingPool.length));
      let dadId = floor(random(this.matingPool.length));

      let mom = this.matingPool[momId].getDna();
      let dad = this.matingPool[dadId].getDna();

      let child = mom.crossover(dad);
      child.mutate(this.mutationRate);

      let location = createVector(width/2, height + 20);
      this.population[i] = new Rocket(location, child);
    }
    this.generations++;
  }

  getGeneration(){
    return this.generations;
  }

  getMaxFitness(){
    let record = 0;
    for(let i = 0; i < this.population.length; i++){
      if(this.population[i].getFitness() > record){
        record = this.population[i].getFitness();
      }
    }
    return record;
  }
}
