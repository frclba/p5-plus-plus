let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
	createCanvas(400, 400);
	background(0);
	w = floor(width/2);
	h = floor(heigh/2);

	frameRate(6);
	// snake = new snake();
	// foodLocation();
}

function draw() {
	scale(rez);
	background(51);
	ellipse(width / 2, height / 2, 51);
	fill(255, 0, 255);

	// if(snake.eat(food)){
	// 	foodLocation();
	// }
	// snake.update();
	// snake.show();
	//
	// if (snake.endGame()){
	// 	print("END GAME");
	// 	background(255, 0, 0);
	// 	noLoop();
	// }
	// noStroke();
	// fill(255, 0, 0);
	// ClientRect(food.x, food.y, 1, 1);
}


function foodLocation() {
	let x = floor(random(w));
	let y = floor(random(h));
	food = createVectr(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}
