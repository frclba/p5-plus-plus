function setup() {
	createCanvas(windowWidth, windowHeight);
	newTree();
}

function draw() {
	drawElipse(width/2, height/2, 200);
}



function newTree(x, y, d){
	background(51);
	stroke(255);
	push();
	ellipse(x, y, d);
	ellipse(x+400, y/2, d*2);
	ellipse(x/2, y/2, d*2);

	if(d > 10){
		drawElipse(x + d, y, d * 0.333);
		drawElipse(x - d, y, d * 0.333);
	}

}
