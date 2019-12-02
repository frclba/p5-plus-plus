let n = 0;
let d = 0;

let dSlider;
let nSlider;

function setup() {
	createCanvas(600, 600);
	dSlider = createSlider(1, 180, 72);
	nSlider = createSlider(1, 36, 6);
	angleMode(DEGREES);
	frameRate(30);
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

	n === 10 ? n = 1 : n += 0.01;
	d === 30 ? d = 1 : d += 0.01;
}