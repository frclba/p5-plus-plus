class Pipe{
  constructor(){
    let spacing = 125;
    let centery = random(spacing, height-spacing);

    this.top = centery - spacing / 2;
    this.bottom = height - (centery + spacing / 2);

    this.x = width;
    this.w = 80;

    this.speed = 6;
  }


  hits(bird){
    if((bird.y - bird.r) < this.top || (bird.y + bird.r) > (height - this.bottom)){
      if(bird.x > this.x && bird.x < this.x + this.w){
        return true;
      }
    }
    return false;
  }

  show(){
    stroke(255);
    fill(200);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update(){
    this.x -= this.speed;
  }

  offscreen(){
    if(this.x < -this.w){
      return true;
    }
    else {
      return false;
    }
  }
}
