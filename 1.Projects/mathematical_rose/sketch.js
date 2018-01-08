var a = 0;
var d = 8;
var n = 5;

var sliderD;
var sliderN;
var angle = 0;

function setup() {
	createCanvas(800, 600);

	sliderD = createSlider(1, 22, 5, 0.5);
	sliderN = createSlider(1, 22, 5, 0.5);
}


function draw() {
	background(90);
	translate(width/2, height/2);
	stroke(255);
	fill(0, 1, 111);

	var offset = 0.333;

	var x = map(sin(angle), -1, 1, 1, 22);

	sliderN.value(x);
	sliderD.value(x + 9);

	var k = sliderN.value() / sliderD.value() + 0.1;

	angle += 0.0333;

	beginShape();
	for(var a = 0; a < TWO_PI * 11; a += 0.011){
		var r = 300 * cos(k * a);
		var x = r * cos(a);
		var y = r * sin(a);
		vertex(x, y);
	}
	endShape();
}
