let circles = [];
let protection = 1000;

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = random(5, 50);
  }
  
}

function move(){
  for(var i = 0; i <= circles.length; i++){
    let circle = circles[i];
    circle.fill(0);
  }
}

function controlCircles(){
  while(circles.length < 333){
     circle = new Circle(random(windowWidth), random(windowHeight));

    checkOverlaping(circle);

    if(!checkOverlaping(circle)){
      circles.push(circle);
    }
    protection++;
    if(protection > 10000)
      break;
  }
}

function checkOverlaping(circle){
  for (var j = 0; j < circles.length; j++){
    var other = circles[j];
    var d = dist(circle.x, circle.y, other.x, other.y);
    if (d < circle.r + other.r){
      return true;
    }
  }
  return false;
}

function printCircles() {
	for(var i = 0; i < circles.length; i++){
		var circle = circles[i];
		stroke(0,0,0);
    strokeWeight(4);
		fill(255,0,150,100);
		ellipse(circle.x, circle.y, circle.r);
	}
}
