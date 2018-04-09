function setup() {
	createCanvas(windowWidth, windowHeight);
	w = new Walker();
	w2 = new Walker();
}

function draw() {
	background(51);
	w.update();
	w.display();
	w2.update();
	w2.display();
}

function Walker(){
	this.pos = createVector(width / 2, height/2);
	this.vel = createVector(random(-1, 1), 0);

	this.update = function(){
		var mouse = createVector(mouseX, mouseY);
		this.acc = p5.Vector.sub(mouse, this.pos);
		this.acc.setMag(0.05);

		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	this.display = function(){
		fill(75,0,130);
		stroke(255);
		strokeWeight(2);
		ellipse(this.pos.x, this.pos.y, 60);
	}
}
