var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < 20; i++){
  var mover = new Mover(random(1,4), 0, 0);
  particles.push(mover);
  }
}

function draw() {
  background(0);

  for(var i = 0; i < particles.lenght; i++){
    var wind = new p5.Vector(0.01, 0);
    var gravity = new p5.Vector(0, 0.1 * particles[i].mass);

    particles[i].applyForce(wind);
    particles[i].applyForce(gravity);

    particles[i].update();
    particles[i].display();
    particles[i].checkEdges();
  }
}
