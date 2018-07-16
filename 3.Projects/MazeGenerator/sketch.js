let cols, rows;
let w = 40;
let grid = [];
let current;

function setup(){
  createCanvas(400, 400);
  cols = floor(width/w);
  rows = floor(height/w);

  for(let j = 0; j < rows; j++){
    for(let i = 0; i < cols; i++){
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  current = grid[0];
}

function draw(){
  background(0);
  for(let i = 0; i < grid.length; i++){
    grid[i].show();
  }

  current.visited = true;
  let next = current.checkNeighbors();
  if(next){
    next.visited = true;
    current = next;
  }
}
