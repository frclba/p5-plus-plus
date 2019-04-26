let position,velocity;
let field;
let ratio = 1;

function calculateMMC(arg1, arg2){
	let fieldArray = [];
	let rows = width/arg1;
	let cols = height/arg2;

	field = new Field(rows, cols);
	console.log(field);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	position = createVector(0, 0);
	velocity = createVector(5, 10);

	calculateMMC(5,7);

}

function draw() {
	field.display();

	noStroke();
	fill(55);
	rect(5, 7, width/2, height/2);

	position.add(velocity);

	if((position.x > width) || (position.x < 0)) {
		velocity.x *= -1;
	}
	if((position.y > height) || (position.y < 0)) {
		velocity.y *= -1;
	}

	stroke(0);
	fill(255, 0, 255);
	ellipse(position.x, position.y, 42);
}
