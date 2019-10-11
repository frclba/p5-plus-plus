let n = 0;
let d = 0;

let dSlider;
let nSlider;

function setup() {
	createCanvas(500, 500);
	dSlider = createSlider(1, 180, 71);
	nSlider = createSlider(1, 36, 6);
	angleMode(DEGREES);
	frameRate(1);
}

function draw() {
	background(51);
	translate(width/2, height/2 + 20);
	noFill();
	// n = nSlider.value();
	// d = dSlider.value();

	beginShape();
	stroke(255, 0, 255);
	strokeWeight(2);
	for(let i = 0; i < 361; i++) {
		let k = i * d;
		let r = 210 * sin(n*k);

		let x = r * cos(k);
		let y = r * sin(k);

		vertex(x, y);
	}
	endShape();

	beginShape();
	stroke(255, 200);
	strokeWeight(3);
	for(let i = 0; i < 361; i++) {
		let k = i;
		let r = 210 * sin(n*k);

		let x = r * cos(k);
		let y = r * sin(k);

		vertex(x, y);
	}
	endShape();

	n === 12 ? n = 1 : n += 1;
	d === 100 ? d = 1 : d += 10;
}