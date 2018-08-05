let particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
	particles.push(new Particle(mouseX, mouseY));
}

function draw() {
	background(90);
	for(let i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].show();
	}

}
