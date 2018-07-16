class Cell {
  constructor(i, j){
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
  }

  checkNeighbors(){
    let neighbors = [];
    let i = this.i;
    let j = this.j;

    let top = grid[this.index(i, j - 1)];
    let right = grid[this.index(i+1, j)];
    let bottom = grid[this.index(i, j+1)];
    let left = grid[this.index(i-1, j)];

    if(top && !top.visited){
      neighbors.push(top);
    }
    if(right && !right.visited){
      neighbors.push(right);
    }
    if(bottom && !bottom.visited){
      neighbors.push(bottom);
    }
    if(left && !left.visited){
      neighbors.push(left);
    }

    if(neighbors.length > 0){
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  index(i, j){
    if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1){
      return -1;
    }
    else{
      return i + j * cols;
    }
  }

  show(){
    let x = this.i * w;
    let y = this.j * w;

    stroke(255);
    if(this.walls[0]){
      line(x, y, x+w, y);
    }
    if(this.walls[1]){
      line(x+w, y, x+w, y+w);
    }
    if(this.walls[2]){
      line(x+w, y+w, x, y+w);
    }
    if(this.walls[3]){
      line(x, y+w, x, y);
    }

    if(this.visited){
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }
  }
}
