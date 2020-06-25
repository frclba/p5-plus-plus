let n = 0;
let d = 0;
let r = 69; 

let dSlider;
let nSlider;
let rSlider;

let checkbox;
let reset_btn;

function setup() {
	dSlider = createSlider(1, 180, 72);
	nSlider = createSlider(1, 36, 6);
	rSlider = createSlider(69, 222, 69);
  	checkbox = createCheckbox('Enable control', false);
	createCanvas(windowWidth, windowHeight-111);
	reset_btn = createButton("reset");

	angleMode(DEGREES);
	frameRate(21);
}

function draw() {
	background(51);
	translate(width/2 - 10, height/2 - 10);
	noFill();
	
	if(checkbox.checked()){
		n = nSlider.value();
		d = dSlider.value();
		r = rSlider.value();
	} else {
		n === 10 ? n = 1 : n += 0.01;
		d === 30 ? d = 1 : d += 0.001;
	}
	
	reset_btn.mousePressed(() => {
		window.location.reload();
	})
	
	beginShape();
	stroke(255, 0, 255);
	strokeWeight(2);
	for(let i = 0; i < 361; i++) {
		let k = i * d;
		let radius = r * sin(n*k);
		let x = radius * cos(k);
		let y = radius * sin(k);
		vertex(x, y);
	}
	endShape();

	beginShape();
	stroke(255, 200);
	strokeWeight(3);
	for(let i = 0; i < 361; i++) {
		let k = i;
		let radius = r * sin(n*k);
		let x = radius * cos(k);
		let y = radius * sin(k);
		vertex(x, y);
	}
	endShape();
}
