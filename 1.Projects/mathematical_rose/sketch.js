var a = 0;
var d = 8;
var n = 5;

var sliderD;
var sliderN;

function setup() {
	createCanvas(800, 600);

	sliderD = createSlider(1, 10, 5, 0.5);
	sliderN = createSlider(1, 10, 5, 0.5);
}
function draw() {
	d = sliderD.value();
	background(90);
	translate(width/2, height/2);
	stroke(0);
	fill(244,0,36);
	k = sliderN.value() / sliderD.value();
	// var k = Math.E/Math.PI;﻿

	beginShape();
	for(var a = 0; a < TWO_PI * 30; a += 0.02){
		var r = 200 * cos(k * a);
		var x = r * cos(a);
		var y = r * sin(a);
		vertex(x, y);
	}
	endShape();
}
