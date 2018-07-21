function newChar(){
  let newC = floor(random(64, 122));
  if(newC === 64 ){
    newC = 32;
  }
  return String.fromCharCode(newC);
}

class DNA {
  constructor(num) {
    this.genes = [];
    this.fitness = 0;

    for(let i = 0; i < num; i++){
      this.genes[i] = newChar();
    }
  }

  getPhrase(){
    return this.genes.join("");
  }

  calcFitness(target){
    let score = 0;
    for(let i = 0; i < this.genes.length; i++){
      if(this.genes[i] == target.charAt(i)){
        score++;
      }
    }
    this.fitness = score / target.length;
  }

  crossover(partner) {
    let child = new DNA(this.genes.length);
    let midpoint = floor(random(this.genes.length));

    for(let i = 0; i < this.genes.length; i++){
      if(i > midpoint){
        child.genes[i] = this.genes[i];
      }
      else{
        child.genes[i] = partner.genes[i];
      }
    }
    return child;
  }

  mutate(mutationRate){
    for(let i = 0; i < this.genes.length; i++){
      if(random(1) < mutationRate){
        this.genes[i] = newChar();
      }
    }
  }
}
