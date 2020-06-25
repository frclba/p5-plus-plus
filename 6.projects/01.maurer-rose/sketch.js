let n = 0;
let d = 0;
let r = 69; 

let dSlider;
let nSlider;
let rSlider;

let checkbox;
let reset_btn;

function setup() {
	dSlider = createSlider(1, 180, 10);
	nSlider = createSlider(1, 36, 6);
	rSlider = createSlider(69, 222, 69);
  	checkbox = createCheckbox('Enable control', false);
	createCanvas(windowWidth, windowHeight-111);
	reset_btn = createButton("reset");

	angleMode(DEGREES);
	frameRate(30);
}

function draw() {
	background(51);
	translate(width/2 - 10, height/2 - 10);
	fill(0);
	stroke(255)
	ellipse(0, 0, 3);
		
	
	if(checkbox.checked()){
		n = nSlider.value();
		d = dSlider.value();
		r = rSlider.value();
	} else {
		n === 12 ? n = 0 : n += 0.01;
		d === 72 ? d = 0 : d += 0.01;
	}
	
	reset_btn.mousePressed(() => {
		window.location.reload();
	})
	
	noFill();
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
