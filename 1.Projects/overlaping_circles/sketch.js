let circles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	var protection = 0;

	while(circles.length < 500){
		var circle = {
			x: random(windowWidth),
			y: random(windowHeight),
			r: random(5, 50)
		}

		var overlapping = false;


		for (var j = 0; j < circles.length; j++){
			var other = circles[j];
			var d = dist(circle.x, circle.y, other.x, other.y);
			if (d < circle.r + other.r){
				overlapping = true;
			}
		}

		if(!overlapping){
			circles.push(circle);
		}
		protection++;
		if(protection > 10000)
			break;
	}
}

function draw() {
	for(var i = 0; i < circles.length; i++){
		var circle = circles[i];
		stroke(0,0,0);
		fill(255,0,150,100);
		ellipse(circle.x, circle.y, circle.r);
	}
}
