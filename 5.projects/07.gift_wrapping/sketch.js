let left;

const points = [];
const hull = [];

let leftMost;
let currentVertex;
let index = 0;
let nextIndex = -1;
let nextVertex;

function setup() {
	createCanvas(windowWidth, windowHeight);
	let buffer = 10;
	for (let i = 0; i < 100; i++) {
		points.push(
			createVector(
				random(buffer, width - buffer), 
				random(buffer, height - buffer)
			)
		);
	}

	points.sort((a, b) => a.x - b.x);
	leftMost = points[0];
	currentVertex = leftMost;
	hull.push(currentVertex);
	nextVertex = points[1];
	index = 2;
}

function draw() {
	
	// Draw all points
	background(0);
	stroke(255);
	strokeWeight(8);
	for (let p of points) {
		point(p.x, p.y);
	}

	// Draw the hull
	stroke(255,0,255);
	fill(255,0,255,50);
	beginShape();
		for (let p of hull) {
			vertex(p.x, p.y);
		}
	endShape(CLOSE);

	// Draw left most
	stroke(0, 255, 0);
	strokeWeight(32);
	point(leftMost.x, leftMost.y);

	// Draw next vertex
	stroke(0, 0, 255);
	strokeWeight(8);
	point(currentVertex.x, currentVertex.y);

	// Draw current vertex
	stroke(255, 0, 0);
	strokeWeight(2);
	line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);

	let checking = points[index];
	stroke(255);
	line(currentVertex.x, currentVertex.y, checking.x, checking.y);

	// Cross Product
	const a = p5.Vector.sub(nextVertex, currentVertex);
	const b = p5.Vector.sub(checking, currentVertex);
	const cross = a.cross(b);

	if (cross.z < 0) {
		nextVertex = checking;
		nextIndex = index;
	}
	index++;

	if(index == points.length) {
		if(nextVertex == leftMost) {
			console.log("done");
			noLoop(0);
		}
		else {
			hull.push(nextVertex);
			currentVertex = nextVertex;
			index = 0;
			nextVertex = leftMost;
		}
	}
}
