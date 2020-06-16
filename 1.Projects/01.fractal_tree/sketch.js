function setup() {
	slider = createSlider(0, PI, PI/4, 0.01);
	canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
	canvas.show();
	background(51);
	angle = slider.value();
	print (angle);
	stroke(255);
	noFill();
	translate(width/2, height);
	branch(300);
}

function branch (len) {
	var fraction = 2/3;

	line(0, 0, 0, -len);
	translate(0, -len);

	if(len > 3) {
		// Draw Left Branch
		push();
		rotate(angle);
		branch(len*fraction);
		pop();

		// Draw Right Branch
		push();
		rotate(-angle);
		branch(len*fraction);
		pop();
	}
}

function drawCircle(x, y, radius){
	ellipse(x, y, radius);

	if (radius > 1 * 2){
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
