var a = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(90);
	translate(windowWidth/2, windowHeight/2);

	for(var a = 0; a < TWO_PI; a +1){
		var r = 100;
		var x = r * cos(a);
		var y = r * sin(a);

		stroke(255);
		strokeWeight(4);
		point(x, y);
	}
}
