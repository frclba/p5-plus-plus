let lifetime;
let population;
let lifeCounter;
let target;
let info;

function setup(){
  createCanvas(640, 360);
  lifetime = height;

  lifeCounter = 0;
  target = createVector(width / 2, 24);
  let mutationRate = 0.03;
  population = new Population(mutationRate, 50);

  info = createP("");
  info.position(10, 380);
}

function draw(){
  background(101);
  fill(0);
  stroke(0);
  ellipse(target.x, target.y, 24, 24);

  if(lifeCounter < lifetime){
    population.live();
    lifeCounter++;
  }
  else{
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }

  fill(0);
  info.html("Generation #" + population.getGeneration() + "<br>" +
    "Cycles Left: " + (lifetime - lifeCounter));
}

function mousePressed(){
  target.x = mouseX;
  target.y = mouseY;
}
