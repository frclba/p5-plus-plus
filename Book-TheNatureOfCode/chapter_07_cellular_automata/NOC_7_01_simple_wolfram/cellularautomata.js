class CellularAutomata {

  constructor(){
    this.w = 10;
    this.cells = new Array(width/this.w);
    for(let i = 0; i < this.cells.length; i++){
      this.cells[0] = 0;
    }
    this.cells[this.cells.length / 2] = 1;
    this.generation = 0;
    this.ruleset = [0, 1, 1, 0, 1, 1, 0, 1];
  }

  generate(){
    let nextGen = [];
    for(let i = 0; i < this.cells.length; i++){
      nextGen[i] = 0;
    } // define array value 0;

    for(let i = 1; i < this.cells.length-1; i++){
      let left = this.cells[i-1];
      let me = this.cells[i];
      let right = this.cells[i+1];

      nextGen[i] = this.rules(left, me, right);
    }

    this.cells = nextGen;
    this.generation++;
  }

  display(){
      for(let i = 0; i < this.cells.length; i++){
        if(this.cells[i] == 1){
          fill(200);
        }
        else{
          fill(51);
        }
        noStroke();
        rect(i*this.w, this.generation*this.w, this.w, this.w);
      }
  }

  rules(a, b, c){
    if (a == 1 && b == 1 && c == 1) return this.ruleset[0];
    if (a == 1 && b == 1 && c === 0) return this.ruleset[1];
    if (a == 1 && b === 0 && c == 1) return this.ruleset[2];
    if (a == 1 && b === 0 && c === 0) return this.ruleset[3];
    if (a === 0 && b == 1 && c == 1) return this.ruleset[4];
    if (a === 0 && b == 1 && c === 0) return this.ruleset[5];
    if (a === 0 && b === 0 && c == 1) return this.ruleset[6];
    if (a === 0 && b === 0 && c === 0) return this.ruleset[7];
    return 0;
  }
}
