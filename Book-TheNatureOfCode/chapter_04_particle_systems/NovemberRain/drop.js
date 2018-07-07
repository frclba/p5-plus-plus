class Drop {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.yspeed = random(1,6);
  }

  fall(){
    this.y += this.yspeed;

    if( this.isOffScreeen()){
      this.x = random(0, width);
      this.y = random(-100, -10);
    }
  }

  show(){
    stroke(138, 43, 226);
    strokeWeight(3);
    line(this.x, this.y, this.x, this.y + 10);
  }

  isOffScreeen(){
    return (this.y >= height);
  }
}
