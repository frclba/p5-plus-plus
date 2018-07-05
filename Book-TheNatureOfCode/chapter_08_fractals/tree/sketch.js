function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(51);
	angle = map(mouseX, 0, width, 0, PI/2);
	translate(width/2, height);
	stroke(255);
	branch(120, 1);
}



function branch(len, generation){
	strokeWeight(map(generation, 1, 10, 4, 1));
	line(0, 0, 0, -len);
	translate(0, -len);

	len *= 0.666;

	generation++;

	if(len > 2){
		push();
			rotate(angle);
			branch(len, generation);
		pop();

		push();
			rotate(-angle);
			branch(len, generation);
		pop();
	}
}
