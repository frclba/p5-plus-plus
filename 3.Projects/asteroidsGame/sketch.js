let ship;
let asteroids = [];
let lasers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship(width/2, height/2);
	for(let i = 0; i < 10; i++){
		asteroids.push(new Asteroid());
	}
}

function draw() {
	background(0);

	// Asteroids
	for (let i = 0; i < asteroids.length; i++){
		if(ship.hits(asteroids[i])){
			console.log("dies");
		}
		asteroids[i].controlAsteroids();
	}

	// Lasers
	for (let i = lasers.length-1; i >= 0; i--){
		lasers[i].controlLasers();
		if(lasers[i].offscreen()){
			lasers.splice(i, 1);
		}
		else{
			// COLLISIONS
			for (let j = asteroids.length-1; j >= 0; j--){
				if(lasers[i].hits(asteroids[j])){
					if(asteroids[j].r > 20){
						let newAsteroids = asteroids[j].breakUp();
						asteroids = asteroids.concat(newAsteroids);
					}
					asteroids.splice(j, 1);
					lasers.splice(i, 1);
					break;
				}
			}
		}
	}

	// SHIP
	ship.controlShip();
}

function keyPressed(){
	if(key == ' '){
		lasers.push(new Laser(ship.pos, ship.heading));
	}
	else if(keyCode == RIGHT_ARROW)
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
