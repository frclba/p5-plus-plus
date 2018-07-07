let ship;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
}
function draw() {
	background(0);
	ship.render();
}
