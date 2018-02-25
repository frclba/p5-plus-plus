var k;

function setup() {
	createCanvas(640,360);
	background(255);
	frameRate(1);  // Animate slowly
	k = new KochFractal();
}

function draw() {
	background(51);
	// Draws the snowflake!
	k.render();
	// Iterate
	k.nextLevel();
	// Let's not do it more than 5 times. . .
	if (k.getCount() > 5) {
		k.restart();
	}
}
