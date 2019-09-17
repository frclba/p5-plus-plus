let pi = 4;
let interation = 0;

let minY = 2;
let maxY = 4;

const history = [];
let div;

function setup() {
	createCanvas(windowWidth, 400);
	div = createDiv("0")
}

function draw() {
	background(0);
	let denominator = interation * 2 + 3;
	let fraction = 4/denominator;
	
	(interation % 2 == 0 ) ? pi -= fraction : pi += fraction;
	history.push(pi);
	
	stroke(255);
	strokeWeight(3);
	let piY = map(PI, minY, maxY, height, 0);
	line(0, piY, width, piY);

	stroke(255, 0, 255);
	noFill();	
	beginShape();
		let spacing = width / history.length;
		for(let i = 0; i < history.length; i++) {
			let x = i * spacing;
			let y = map(history[i], minY, maxY, height, 0);
			vertex(x, y);
		}
	endShape();
	interation++
	
	div.html(pi)
}
