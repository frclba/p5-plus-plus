let vehicles = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 99; i++) {
   vehicles.push(new Vehicle(random(width), random(height), 33));
  }
}

function draw(){
  background(51);

  for(let i = 0; i < vehicles.length; i++){
    vehicles[i].separate(vehicles);

    vehicles[i].update();
    vehicles[i].borders();
    vehicles[i].display();
  }
}
