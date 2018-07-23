let vehicles = [];
let food = [];
let poison = [];
let debug;

function setup(){
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 45; i++){
    vehicles[i] = new Vehicle(random(width), random(height));
  }

  for(let i = 0; i < 40; i++){
    food.push(createVector(random(width), random(height)));
  }
  for(let i = 0; i < 20; i++){
    poison.push(createVector(random(width), random(height)));
  }
}

function draw(){
  background(51);
  spawnFoodPoison();
  displayFoodPoison();

  controlVehicles();
}

function spawnFoodPoison(){
  let r = random(1);

  if(r < 0.1){
    food.push(createVector(random(width), random(height)));
  }
  else if(r < 0.01){
    poison.push(createVector(random(width), random(height)));
  }
}

function displayFoodPoison(){
  for(let i = 0; i < food.length; i++){
    fill(0, 255, 0);
    noStroke();
    ellipse(food[i].x, food[i].y, 10);
  }

  for(let i = 0; i < poison.length; i++){
    fill(255, 0, 0);
    noStroke();
    ellipse(poison[i].x, poison[i].y, 10);
  }
}

function controlVehicles(){
  for(let i = vehicles.length - 1; i >= 0; i--){
    vehicles[i].boundaries();
    vehicles[i].behaviors(food, poison);
    vehicles[i].update();
    vehicles[i].display();

    let babyVehicle = vehicles[i].clone();
    if(babyVehicle != null){
      vehicles.push(babyVehicle);
    }

    if(vehicles[i].dead()){
      let x = vehicles[i].pos.x;
      let y = vehicles[i].pos.y;
      food.push(createVector(x, y));
      vehicles.splice(i, 1);
    }
  }
}


function mouseDragged(){
  vehicles.push(new Vehicle(mouseX, mouseY));
}
