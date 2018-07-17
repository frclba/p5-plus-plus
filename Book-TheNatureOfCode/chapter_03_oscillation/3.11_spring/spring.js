class Spring {

  constructor(x, y, len){
    this.anchor = createVector(x, y);
    this.restLength = len;
    this.k = 0.3;
  }


  connect(ball){
    let force = p5.Vector.sub(ball.position, this.anchor);
    let dist = force.mag();
    let stretch = dist - this.restLength;

    // Hooke's law
    // F = k*stretch
    force.normalize();
    force.mult(-1 * this.k * stretch);
    ball.applyForce(force);

  }

  // Constrain the distance between ball, anchor, min and max.
  constrainLength(ball, minLength, maxLength) {
    let direction = p5.Vector.sub(ball.position, this.anchor);
    let d = direction.mag();

    if(d < minLength){ // Too short
      direction.normalize();
      direction.mult(minLength);

      ball.position = p5.Vector.add(this.anchor, direction);
      ball.velocity.mult(0);
    }
    else if(d > maxLength){ // Too long
      direction.normalize();
      direction.mult(maxLength);

      ball.position = p5.Vector.add(this.anchor, direction);
      ball.velocity.mult(0);
    }
  }

  display(){
    stroke(255);
    fill(127);
    strokeWeight(2);
    rectMode(CENTER);
    rect(this.anchor.x, this.anchor.y, 10, 10);
  }

  displayLine(ball){
    strokeWeight(2);
    stroke(255);
    line(ball.position.x, ball.position.y, this.anchor.x, this.anchor.y);
  }
}
