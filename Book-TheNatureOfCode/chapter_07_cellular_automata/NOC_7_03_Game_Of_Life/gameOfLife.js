class GameOfLife {

  constructor(){
    this.w = 8;
    this.columns = width/this.w;
    this.rows = height/this.w;

    this.board = new Array(this.columns);
    this.next = new Array(this.columns);

    for(let i = 0; i < this.columns; i++){
      this.board[i] = new Array(this.rows);
      this.next[i] = new Array(this.rows);
    }
    this.initialize();

  }

  initialize(){
    for(let i = 0; i < this.columns; i++){
      for(let j = 0; j < this.rows; j++){
        if(i === 0 || j === 0 || i == this.columns-1 || j == this.rows-1){
          this.board[i][j] = 0; // fillining the edges with 0s
        }
        else{ // filing the rest randomly
          this.board[i][j] = floor(random(2));
        }
        this.next[i][j] = 0;
      }
    }
  }

  generate(){
    for(let col = 1; col < this.columns-1; col++){
      for(let row = 1; row < this.rows-1; row++){
        let neighbors = 0;

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            neighbors += this.board[col+i][row+j];
          }
        }

        neighbors -= this.board[col][row];

        //Rules of life
        if((this.board[col][row] == 1) && (neighbors < 2)){
          this.next[col][row] = 0; // lonely
        }
        else if((this.board[col][row] == 1) && (neighbors > 3)){
          this.next[col][row] = 0; // overpopulation
        }
        else if((this.board[col][row] == 0) && (neighbors == 3)){
          this.next[col][row] = 1; // reproduction
        }
        else{
          this.next[col][row] = this.board[col][row]; // stasis
        }
      }
    }
    let temp = this.board;
    this.board = this.next;
    this.next = temp;
  }

  display(){
    for(let i = 0; i < this.columns; i++){
      for(let j = 0; j < this.rows; j++){

        if(this.board[i][j] == 1){
          fill(0);
        }
        else{
          fill(252);
        }
        stroke(0);
        rect(i*this.w, j*this.w, this.w, this.w);
      }
    }
  }
}
