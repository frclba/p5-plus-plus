function FlowField(r){
  this.resolution = r;

  this.cols = width / this.resolution;
  this.rows = height / this.resolution;

  this.make2Darray = function (n){
    let array = [];
    for (let i = 0; i < n; i++){
      array[i] = [];
    }
    return array;
  };
  this.field = this.make2Darray(this.cols);

  this.init = function(){
    noiseSeed(Math.floor(random(10000)));
    let xoff = 0;
    for(let i = 0; i < this.cols; i++){
      let yoff = 0;
      for(let j = 0; j < this.rows; j++){
        let theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
        // let theta = map(sin(xoff)+cos(yoff),-2,2,0,TWO_PI);
        this.field[i][j] = createVector(cos(theta), sin(theta));
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  };
  this.init();

  this.display = function(){
    for(let i = 0; i < this.cols; i++){
      for(let j = 0; j < this.rows; j++){
        drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 2);
      }
    }
  };

  this.lookup = function(lookup){
    var column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols-1));
    var row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows-1));
    return this.field[column][row].copy();
  };

  var drawVector = function(v, x, y, scayl){
    push();
      var arrowsize = 4;
      translate(x,y);
      stroke(200, 100);
      rotate(v.heading());
      var len = v.mag() * scayl;
      // line(0,0,len,0);
      line(len,0,len-arrowsize,+arrowsize/2);
      // line(len,0,len-arrowsize,-arrowsize/2);
    pop();
  };
}
