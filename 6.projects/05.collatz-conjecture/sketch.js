// fork of:
//   https://editor.p5js.org/codingtrain/sketches/XjLDE7gu6
//   by Daniel Shiffman
//   https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
//   https://youtu.be/EYLWxwo1Ed8

let start = 1;
let reset = start;
let angle = 0.15; // changed from 0.15
let inc = 300;
let len;
let sw;

function setup() {
	createCanvas(innerWidth, innerHeight);
	background(51);
	colorMode(HSB, 1, 1, 1, 1);
	frameRate(60);
	let minDimension = min(width, height);

	sw = map(minDimension, 450, 1500, 2, 7);
	strokeWeight(sw * 2); // changed from 2

	len = map(minDimension, 450, 1500, 3, 9); // changed from 5
}

function draw() {
	let sequence = [];
	let n = start;
	do {
		sequence.push(n);
		n = collatz(n);
	} while (n != 1);
	sequence.push(1);
	sequence.reverse();

	resetMatrix();
	translate(width / 2, height);
	for (let j = 0; j < sequence.length; j++) {
		let value = sequence[j];
		if (value % 2 == 0) {
			rotate(angle);
		} else {
			rotate(-angle);
		}
		stroke(j / sequence.length, 1, 1, 0.03); // alpha changed from 0.04
		line(0, 0, 0, -len);
		translate(0, -len);
	}
	start += inc;

	// reset the starting number before it gets too large
	if (start > 50000) {
		reset++;
		start = reset;
	}
}

function collatz(n) {
	// even
	if (n % 2 == 0) {
		return n / 2;
		// odd
	} else {
		return (n * 3 + 1) / 2;
	}
}
