function setup() {
	canvas = createCanvas(windowWidth, 600);
	slider = createSlider(0, PI, PI/4, 0.01);
}

function draw() {
	canvas.show();
	background(51);
	angle = slider.value();
	print (angle);
	stroke(255);
	noFill();
	translate(width/2, height);
	branch(100);
}

function branch (len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	var fraction = 2/3;
	if(len > 3) {
		push();
		rotate(angle);
		branch(len*fraction);
		pop();
		push();
		rotate(-angle);
		branch(len*fraction);
		pop();
	}
}

function drawCircle(x, y, radius){
	ellipse(x, y, radius);

	if (radius > 1 * 2){
		// drawCircle(x + radius * 0.5, y, radius * 0.5)
		// drawCircle(x - radius * 0.5, y, radius * 0.5)

		if (random(0, 10) < 20){
			drawCircle(x, y - radius * 0.5, radius * 0.5)
		}
		if (random(1, 10) < 20){
			drawCircle(x, y + radius * 0.5, radius * 0.5)
		}
	}
}
