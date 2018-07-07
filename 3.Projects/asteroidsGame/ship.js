class Ship {
  constructor(x, y){
    this.x = x;
    this.y = y;

    this.pos = createVector(width/2, height/2);
    this.r = 10;
  }

  render(){
    translate(this.pos.x, this.pos.y);
    noFill();
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }
}
