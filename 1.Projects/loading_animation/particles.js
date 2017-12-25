function ball(){}


function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 5;

  this.history = [];

  this.update = function(){
    this.y += this.speed;
    this.x += this.speed;

    if(this.x >= windowWidth || this.x < 0){
      this.speed *= -1;
    }

    if(this.y > windowHeight || this.y < 0){
      this.speed *= -1;
       // this.speed *= (random(-0.5, -3));
    }


    for(var i = 0; i < this.history.length; i++){
      this.history[i].x += random(2, -1);
      this.history[i].y += random(2, -1);
    }

    var v = createVector(this.x, this.y);
    this.history.push(v);
    if(this.history.length > 30){
      this.history.splice(0, 1);
    }
  }

  this.show = function(){
    stroke(60,255,99);
		strokeWeight(5);
    ellipse(this.x, this.y, 30);

    fill(255,0,255);
    beginShape();
    for(var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      vertex(pos.x, pos.y);
    }
    endShape();
  }
}
