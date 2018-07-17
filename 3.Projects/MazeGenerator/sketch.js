// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

let cols, rows;
let w = 30;
let grid = [];
let current;
let stack = [];

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

  // PART 1 - Choose randomly one of the unvisited neighbours
  let next = current.checkNeighbors();
  if(next){
    // PART 2 - Push the current cell to the stack
    stack.push(current);

    // PART 3 - Remove the wall between the current cell and the chosen cell
    removeWalls(current, next);

    // PART 4 - Make the chosen cell the current cell and mark it as visited
    current = next;
    next.visited = true;
  }
  else if (stack.length > 0) {
    current = stack.pop();
  }
  current.highlight();
}

function removeWalls(a, b){
  let x = a.i - b.i;
  let y = a.j - b.j;

  if(x === 1){
    a.walls["left"] = false;
    b.walls["right"] = false;
  }
  else if (x === -1) {
    a.walls["right"] = false;
    b.walls["left"] = false;
  }
  if(y === 1){
    a.walls["top"] = false;
    b.walls["bottom"] = false;
  }
  else if (y === -1) {
    a.walls["bottom"] = false;
    b.walls["top"] = false;
  }
}
