var particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(var i = 0; i <= 2; i++){
		particles[i] = new Particle(100*(i+1), 100, i);
	}
}

function draw() {
	background(51);
	var wind = createVector(0.5, 0);

	for(var i = 0; i <= 2; i++){
		var gravity = createVector(0, 0.2*particles[i].mass);
		particles[i].applyForce(gravity);

		if(mouseIsPressed)
			particles[i].applyForce(wind);

		particles[i].update();
		particles[i].edges();
		particles[i].show();
	}
}
