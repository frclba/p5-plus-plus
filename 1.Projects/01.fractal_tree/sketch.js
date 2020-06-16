let hue = 0;
let scale = 0.333;

function setup() {
	slider = createSlider(0.1, 2.36, PI/4, 0.0001);
	createCanvas(windowWidth, windowHeight*0.8);
}

function draw() {
	colorMode(HSB, 255);
	background(51);

	angle = slider.value();
	
	hue = hue > 255 ? 0 : hue += 3
	stroke(hue, 255, 255);
	strokeWeight(2);
	noFill();
	
	translate(width/2, height);
	branch(floor(height*scale));
}

function branch (len) {
	var fraction = 0.6666666;

	line(0, 0, 0, -len);
	translate(0, -len);

	const branch_size = len*fraction
	if(len > 6) {
		ellipse(0, 0, len*0.3);

		// Draw Left Branch
		push();
		rotate(angle);
		branch(branch_size);
		pop();

		// Draw Right Branch
		push();
		rotate(-angle);
		branch(branch_size);
		// drawCircle(0,0, 6); //cpu intensive - slows down too much
		pop();
	}
}

function drawCircle(x, y, radius){
	ellipse(x, y, radius);

	if (radius > 2){
		// drawCircle(x + radius * 0.5, y, radius * 0.5);
		// drawCircle(x - radius * 0.5, y, radius * 0.5);
		if (random(0, 10) < 20){
			drawCircle(x, y - radius * 0.5, radius * 0.5)
		}
		if (random(1, 10) < 20){
			drawCircle(x, y + radius * 0.5, radius * 0.5)
		}
	}
}
