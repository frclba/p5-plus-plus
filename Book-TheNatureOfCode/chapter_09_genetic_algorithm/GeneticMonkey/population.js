class Population {
  constructor(target, mutation, num){
    this.population = [];
    this.matingPool = [];
    this.generations = 0;
    this.finished = false;
    this.maxFitness = 0;

    this.target = target;
    this.mutationRate = mutation;
    this.num = num;
    this.perfectScore = 1;
    this.best = "";

    for(let i = 0; i < this.num; i++){
      this.population[i] = new DNA(this.target.length);
    }
    this.matingPool = [];
    this.calcFitness();
  }

  calcFitness(){
    for(let i = 0; i < this.population.length; i++){
      this.population[i].calcFitness(target);
    }
  }

  naturalSelection(){
  }

  generate() {

    for(let i = 0; i < this.population.length; i++){
      if(this.population[i].fitness > this.maxFitness){
        this.maxFitness = this.population[i].fitness;
      }
    }

    // Refill the population with children from the mating pool
    let newPopulation = [];
    for (let i = 0; i < this.population.length; i++) {
      let mom = this.acceptReject();
      let dad = this.acceptReject();
      let child = mom.crossover(dad);
      child.mutate(this.mutationRate);
      newPopulation[i] = child;
    }
    this.population = newPopulation;
    this.generations++;
  }

  acceptReject(){
    let besafe = 0;
    while(true){
      let index = floor(random(this.population.length));
      let partner = this.population[index];
      let rand = random(this.maxFitness);

      if(rand < partner.fitness){
        return partner;
      }
      besafe++;
      if(besafe > 10000){return null;}
    }
  }

  getBest() {
    return this.best;
  }

  // Compute the current "most fit" member of the population
  evaluate() {
    let worldrecord = 0.0;
    let index = 0;
    for (let i = 0; i < this.population.length; i++) {
      if (this.population[i].fitness > worldrecord) {
        index = i;
        worldrecord = this.population[i].fitness;
      }
    }

    this.best = this.population[index].getPhrase();
    if (worldrecord >= this.perfectScore) {
      this.finished = true;
    }
  }

  isFinished() {
    return this.finished;
  }

  getGenerations() {
    return this.generations;
  }

  // Compute average fitness for the population
  getAverageFitness() {
    let total = 0;
    for (let i = 0; i < this.population.length; i++) {
      total += this.population[i].fitness;
    }
    return total / (this.population.length);
  }

  allPhrases() {
    let everything = "";

    let displayLimit = min(this.population.length, 50);


    for (let i = 0; i < displayLimit; i++) {
      everything += this.population[i].getPhrase() + "<br>";
    }
    return everything;
  }
}
