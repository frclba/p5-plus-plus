function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	drawElipse(width/2, height/2, 200);
}



function drawElipse(x, y, d){
	ellipse(x, y, d);
	ellipse(x+400, y/2, d*2);
	ellipse(x/2, y/2, d*2);

	if(d > 10){
		drawElipse(x + d, y, d * 0.333);
		drawElipse(x - d, y, d * 0.333);
	}

}
