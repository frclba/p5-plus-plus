//  Matrix sample library for calculations
// Linear algebra

// let m = new Matrix(3, 2);

class Matrix {
  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;
    this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
  }

  copy(){
    let toReturn = new Matrix (this.rows, this.cols);
    for (let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        toReturn.data[i][j] = this.data[i][j];
      }
    }

    return toReturn;
  }

  static fromArray(arr){
    return new Matrix(arr.length, 1).map((e, i) => arr[i]);
  }

  toArray(){
    let arr = [];
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        arr.push(this.data[i][j]);
      }
    }
  }
  randomize(){
    return this.map(e => Math.random() * 2 - 1);
  }

  static subtract(a, b){
    if(a.row !== b.rows || a.cols !== b.cols){
      console.log('Columns and Rows of A must match Columns and Rows of B.');
      return
    }

    return new Matrix(a.rows, a.cols).map((_, i, j) => a.data[i][j] - b.data[i][j]);
  }

  add(n) {
    if(n instanceof Matrix){
      if(this.rows !== n.rows || this.cols !== n.cols){
        console.log('Columns and rows of A must match columns and rows of B.');
        return;
      }
      return this.map((e, i, j) => e + n.data[i][j]);
    }
    else{
      return this.map(e => e + n);
    }
  }

  static transpose(matrix){
    return new Matrix(matrix.cols, matrix.rows)
    .map((_, i, j) => matrix.data[j][i]);
  }

  static multiply(a, b){
    if(a.cols !== b.rows){
      console.log('Columns of A must match rows of b.');
      return;
    }
    return new Matrix(a.rows, b.cols)
        .map((e, i, j) => {
          // Dot product of values in col
          let sum = 0;
          for (let k = 0; k < a.cols; k++) {
            sum += a.data[i][k] * b.data[k][j];
          }
          return sum;
        });
  }

  multiply(n){
    if(n instanceof Matrix){
      if(this.rows !== n.rows || this.cols !== n.cols){
        console.log('Columns and rows of A must match cols and rows of b.');
        return;
      }
      return this.map((e, i, j) => e * n.data[i][j]);
    }
    else{
      return this.map(e => e * n);
    }
  }

  map(funct){
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        let val = this.data[i][j];
        this.data[i][j] = funct(val, i, j);
      }
    }
    return this;
  }

  static map(matrix, funct){
    return new Matrix(matrix.rows, matrix.cols)
      .map((e, i, j) => funct(matrix.data[i][j], i, j));
  }

  print(){
    console.table(this.data);
    return this;
  }

  serialize(){
    return JSON.stringify(this);
  }

  static deserialize(data){
    if(typeof data == 'string'){
      data = JSON.parse(data);
    }
    let matrix = new Matrix(data.rows, data.cols);
    matrix.data = data.data;
    return matrix;
  }
}

if(typeof module !== 'undefined'){
  module.exports = Matrix;
}
