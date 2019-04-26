class Field {
  constructor(rows, cols){
    this.scale = 1;

    this.rows = rows;
    this.cols = cols;
    this.field = new Array(this.cols * this.rows);
  }

  display(){
    // translate(width/2, height/2);
    for(let x = 0; x < width; x+=19){
      for(let y = 0; y < height; y+=19){
        line(x, y, x+10, y);
        line(x, y, x, y+10);
        line(x+10, y, x+10, y+10);
        line(x, y+10, x+10, y+10);
      }
    }
  }
}
