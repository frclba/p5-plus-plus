class Ball {

  constructor(x, y){
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();

    this.mass = 20;
    this.damping = 0.98;

    this.dragOffset = createVector();
    this.isDragging = false;
  }

  update(){
    this.velocity.add(this.acceleration);
    this.velocity.mult(this.damping);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(oldForce){
    let force = oldForce.copy();
    force.div(this.mass);
    this.acceleration.add(force);
  }

  display(){
    stroke(255);
    strokeWeight(2);
    fill(127);

    if(this.isDragging){
      fill(200);
    }
    ellipse(this.position.x, this.position.y, this.mass * 2);
  }

  handleClick(mouseX, mouseY){
    let dis = dist(mouseX, mouseY, this.position.x, this.position.y);
    if(dis < this.mass){
      this.isDragging = true;
      this.dragOffset.x = this.position.x - mouseX;
      this.dragOffset.y = this.position.y - mouseY;
    }
  }

  stopDragging(){
    this.isDragging = false;
  }

  handleDrag(mouseX, mouseY){
    if(this.isDragging){
      this.position.x = mouseX + this.dragOffset.x;
      this.position.y = mouseY + this.dragOffset.y;
    }
  }
}
