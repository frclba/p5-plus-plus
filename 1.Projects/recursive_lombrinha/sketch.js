function setup() {
	createCanvas(800, 1300);
	translate (400, 750);
}

function draw() {
	background(0);
	stroke(255);
	noFill();
	drawCircle(300, 250 , 400);
}


function drawCircle(x, y, radius){
	ellipse(x, y, radius);

	if (radius > 1 * 2){
	  drawCircle(x + radius * 0.5, y, radius * 0.5)
	  drawCircle(x - radius * 0.5, y, radius * 0.5)

		if (random(0, 1) < 0.5){
	  	drawCircle(x, y - radius * 0.5, radius * 0.5)
		}
		if (random() > 0.5) {
			drawCircle(x, y + radius * 0.5, radius * 0.5)
		}
	}
}
