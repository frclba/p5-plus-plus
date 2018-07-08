let ship;
let asteroids = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship(width/2, height/2);
	for(let i = 0; i < 10; i++){
		asteroids.push(new Asteroid());
	}
}

function draw() {
	background(0);
	ship.controlShip();

	for (let i = 0; i < asteroids.length; i++){
		asteroids[i].render();
		asteroids[i].update();
		asteroids[i].edges();
	}
}

function keyPressed(){
	if(keyCode == RIGHT_ARROW)
		ship.setRotation(0.1);
	else if(keyCode == LEFT_ARROW)
		ship.setRotation(-0.1);
	else if(keyCode == UP_ARROW)
		ship.boosting(true);
}

function keyReleased(){
	ship.setRotation(0);
	ship.boosting(false);
}
