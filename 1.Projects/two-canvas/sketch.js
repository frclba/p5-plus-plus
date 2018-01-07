// save this file as sketch.js
// Sketch One
var s = function( p ) { // p could be any variable name
  var x = 100;
  var y = 100;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(s, 'c1');

// Sketch Two
var t = function( p ) {
  var x = 100.0;
  var y = 100;
  var speed = 2.5;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(1);
    x += speed;
    if(x > p.width){
      x = 0;
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'c2');


function setup() {
	canvas = createCanvas(400, 300);
	slider = createSlider(0, HALF_PI, PI/4, 0.01)
}

function draw() {
	canvas.show();
	background(51);
	angle = slider.value();
	stroke(255);
	noFill();
	translate(width/2, height);
	branch(100);
}

function branch (len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	var fraction = 2/3;
	if(len > 4) {
		push();
		rotate(angle);
		branch(len*fraction);
		pop();
		push();
		rotate(-angle);
		branch(len*fraction);
		pop();
	}
}

function drawCircle(x, y, radius){
	ellipse(x, y, radius);

	if (radius > 1 * 2){
		// drawCircle(x + radius * 0.5, y, radius * 0.5)
		// drawCircle(x - radius * 0.5, y, radius * 0.5)

		if (random(0, 10) < 20){
			drawCircle(x, y - radius * 0.5, radius * 0.5)
		}
		if (random(1, 10) < 20){
			drawCircle(x, y + radius * 0.5, radius * 0.5)
		}
	}
}
