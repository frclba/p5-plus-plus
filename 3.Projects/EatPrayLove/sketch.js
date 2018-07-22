let vehicles = [];
let food = [];
let poison = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  ball = new Vehicle(100, 100);

  for(let i = 0; i < 10; i++){
    food.push(createVector(random(width), random(height)));
  }
  for(let i = 0; i < 10; i++){
    poison.push(createVector(random(width), random(height)));
  }
}

function draw(){
  background(51);

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

  ball.eat(food);
  ball.eat(poison);
  ball.update();
  ball.display();
}
