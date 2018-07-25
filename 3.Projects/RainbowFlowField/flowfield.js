class FlowField{
  constructor(){
    this.scale = scale;
    this.increment = increment;

    this.cols = cols;
    this.rows = rows;
    this.flowArray = new Array(this.cols * this.rows);
  }

  drawFlowField(){
    let yoffset = 0;
    let zoffset = 0;

    for (let yaxis = 0; yaxis < this.rows; yaxis++){
      let xoffset = 0;
      for(let xaxis = 0; xaxis < this.cols; xaxis++){
        let index = xaxis + yaxis * this.cols;

        let angle = noise(xoffset, yoffset, zoffset) * TWO_PI * 2;
        let vec = p5.Vector.fromAngle(angle);
        vec.setMag(1);
        this.flowArray[index] = vec;

        xoffset += this.increment;
        stroke(255, 50);
        push();
          translate(xaxis * this.scale, yaxis * this.scale);
          rotate(vec.heading());
          strokeWeight(1);
          line(0, 0, this.scale, 0);
        pop();
      }
      yoffset += this.increment;
      zoffset += 0.03;
    }
  }
}
