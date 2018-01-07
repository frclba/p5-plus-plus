
// save this file as sketch.js
// Sketch One
var one = function( p ) { // p could be any variable name
 var x = 100;
 var y = 100;
 var speed = -5;
 p.setup = function() {
	 p.createCanvas(400, 200);
 };

 p.draw = function() {
	 p.background(0);
	 p.fill(255);
   //x += speed;
   if(x < 0)
    x = p.width;
	 p.rect(x,y,50,50);
 };
};
var myp5 = new p5(one, 'canvas1');

// Sketch Two
var two = function( p ) {
 var x = 100.0;
 var y = 100;
 var speed = 2.5;

 function drawCircle(x, y, radius){
 	p.ellipse(x, y, radius);
  p.stroke(255);
 	if (radius > 1 /2){
 		if (p.random(0, 10) < 20){
 			drawCircle(x, y - radius * 0.5, radius * 0.5);
 		}
 		if (p.random(1, 10) < 20){
 			drawCircle(x, y + radius * 0.5, radius * 0.5)
 		}
 	}
 }

 p.setup = function() {
	 p.createCanvas(400, 200);
 };

 p.draw = function() {
	 p.background(100);
	 p.fill(1);
	 x += speed;
	 if(x > p.width || x < 0){
		 speed *= -1;
	 }
	 // p.ellipse(x,y,50,50);
   drawCircle(x,y,100);
 };
};
var myp5 = new p5(two, 'canvas2');


//
//
// function setup() {
// 	canvas = createCanvas(400, 300);
// 	slider = createSlider(0, HALF_PI, PI/4, 0.01);
// }
//
// function draw() {
// 	canvas.show();
// 	background(51);
// 	angle = slider.value();
// 	stroke(255);
// 	noFill();
// 	translate(width/2, height);
// 	branch(100);
// }
//
// function branch (len) {
// 	line(0, 0, 0, -len);
// 	translate(0, -len);
// 	var fraction = 2/3;
// 	if(len > 4) {
// 		push();
// 		rotate(angle);
// 		branch(len*fraction);
// 		pop();
// 		push();
// 		rotate(-angle);
// 		branch(len*fraction);
// 		pop();
// 	}
// }
//
