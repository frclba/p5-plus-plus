function setup() {
	createCanvas(windowWidth, windowHeight);
	particle = new Particle();
}

function draw() {
	background(51);
	var gravity = createVector(0, 0.2);
	var wind = createVector(0.5, 0);

	particle.applyForce(gravity);
	if(mouseIsPressed)
		particle.applyForce(wind);

	particle.update();
	particle.edges();
	particle.show();
}
