class Field {
  constructor(rows, cols){
    this.scale = 100;

    this.rows = rows;
    this.cols = cols;
    this.field = new Array(this.cols * this.rows);
  }

  display(){
    let startX = 0;
    let startY = 0;

    while(startX < height){
      line(0, startX, width, startX);
      startX += this.scale;
    }
    while(startY < width){
      line(startY, 0, startY, height);
      startY += this.scale;
    }
  }
}
