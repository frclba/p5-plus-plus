class Cell{
  constructor(pos, r, c){
    let new_pos;
    if(pos)
      new_pos = pos.copy();

    this.pos = new_pos || createVector(random(width), random(height));
    this.r = r * 0.5 || random(20, 100);
    this.c = c || color(random(100,255), 0, random(100,255), 100);
  }

  move(){
    let velocity = p5.Vector.random2D();
    this.pos.add(velocity);
  }

  show(){
    fill(this.c);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.r);
  }

  clicked(x, y){
    var distance = dist(this.pos.x, this.pos.y, x, y);
    return (distance < this.r);
  }

  mitosis(){
    let newCells = [];
    newCells[0] = new Cell(this.pos, this.r);
    newCells[1] = new Cell(this.pos, this.r);
    return newCells;
  }
}
