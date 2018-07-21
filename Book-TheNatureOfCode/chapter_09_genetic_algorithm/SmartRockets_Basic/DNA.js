class DNA {
  constructor(newGenes) {
    if(arguments.length > 0) {
      this.genes = newGenes;
    }
    else{
      this.genes = [];
      this.maxForce = 0.03;

      for(let i = 0; i < lifetime; i++){
        let angle = random(TWO_PI);
        this.genes[i] = p5.Vector.fromAngle(angle);
        this.genes[i].mult(random(0, this.maxForce));
      }
    }
  }

  crossover(partner){
    let child = [];
    let crossover = floor(random(this.genes.length));

    for(let i = 0; i < this.genes.length; i++){
      if(i > crossover){
        child[i] = this.genes[i];
      }
      else{
        child[i] = partner.genes[i];
      }
    }
    let newGenes = new DNA(child);
    return newGenes;
  }

  mutate(mutation) {
    for(let i = 0; i < this.genes.length; i++){
      if(random (1) < mutation){
        let angle = random(TWO_PI);
        this.genes[i] = p5.Vector.fromAngle(angle);
        this.genes[i].mult(random(0, this.maxForce));
      }
    }
  }
}
