function Attractor(x, y, mass){
  this.position = createVector(x, y);
  this.mass = 1+mass;
  this.G = 1;

  this.calculateAttraction = function(p){
    var force = p5.Vector.sub(this.position, p.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }

  this.show = function(){
    ellipse(this.position.x, this.position.y, 33);
  }
}
