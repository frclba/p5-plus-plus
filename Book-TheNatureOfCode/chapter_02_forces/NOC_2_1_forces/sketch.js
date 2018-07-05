var particle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  particle = new Mover(5, 20, 20);
}

function draw() {
  background(255);

  var wind = new p5.Vector(0.01, 0);
  var gravity = new p5.Vector(0, 0.1 * particle.mass);

  particle.applyForce(wind);
  particle.applyForce(gravity);

  particle.update();
  particle.display();
  particle.checkEdges();
}
