let ship;
let asteroids = [];
let lasers = [];
let laserSoundEffects = [];
let explosionSoundEffects = [];
let dust = [];

let canPlay = true;
let score = 0;


function preLoad() {
	for (let i = 0; i < 3; i++){
		laserSoundEffects[i] = loadSound("audio/pew-" + i + ".mp3");
		explosionSoundEffects[i] = loadSound("audio/explosion-" + i + ".mp3");
	}
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship(width/2, height/2);
	// hud = new Hud();
	spawnAsteroids();

}

function spawnAsteroids(){
	for(let i = 0; i < 10; i++){
		asteroids.push(new Asteroid());
	}
}

function reborn(){
	lives--;
	if (lives >= 0){
		ship = new Ship(width/2, height/2);
		canPlay = true;
	}
}

function draw() {
	background(0);

	// Asteroids
	for (let i = 0; i < asteroids.length; i++){
		if(ship.hits(asteroids[i]) && canPlay){
			canPlay = false;
			ship.destroy();
			input.reset();
			setTimeout(reborn, 3000);
		}
		asteroids[i].controlAsteroids();
	}

	// Lasers
	for (let i = lasers.length-1; i >= 0; i--){
		lasers[i].controlLasers();
		if(lasers[i].offscreen()){
			lasers.splice(i, 1);
			continue;
		}
		for (let j = asteroids.length-1; j >= 0; j--){
			if(lasers[i].hits(asteroids[j])){
				asteroids[j].playSoundEffect(explosionSoundEffects);
				score += points[asteroids[j].size];

				let dustVel = p5.Vector.add(lasers[i].velocity.mult(0.2), asteroids[j].velocity);
				let dustNum = (asteroids[j].size + 1) * 5;
				addDust(asteroids[j].pos, dustVel, dustNum);

				let newAsteroids = asteroids[j].breakUp();
				asteroids = asteroids.concat(newAsteroids);
				asteroids.splice(j, 1);
				lasers.splice(i, 1);
				break;
			}
		}
	}

	// SHIP
	ship.controlShip();
}

function spawnAsteroids() {
	for(let i = 0; i < 20; i++){
		asteroids.push(new Asteroid(null, null, 2));
	}
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
