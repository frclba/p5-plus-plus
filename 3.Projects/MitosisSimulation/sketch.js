let cell_array = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i< 10; i++){
    cell_array.push(new Cell());
  }
}

function draw(){
  background(0);

  for(let i = 0; i < cell_array.length; i++){
    cell_array[i].move();
    cell_array[i].show();
  }
}


function mousePressed(){
  for(let i = cell_array.length-1; i >= 0; i--){
    if( cell_array[i].clicked(mouseX, mouseY)){
      let newCells = cell_array[i].mitosis();
      cell_array = cell_array.concat(newCells);
      cell_array.splice(i, 1);
      break;
    }
  }
}
