class GameField {
  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;

    this.field = [];
    for(let i = 0; i < ratio; i++){
      this.field[i] = new Array(ratio);
      for(let j = 0; j < ratio; j++){
        this.field[i][j] = 0;
      }
    }
  }
  display(){
    for(let i = 0; i < ratio; i++){
      for(let j = 0; j < ratio; j++){
        ellipse(i/3*windowWidth + 200, j/3*windowHeight+200, 30);
      }
    }
  }
}
