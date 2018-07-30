class Connection {
  constructor(from, to, weight){
    this.weight = weight;
    this.a = from;
    this.b = to;
  }

  display(){
    stroke(0);
    strokeWeight(3);
    line(this.a.position.x, this.a.position.y,
      this.b.position.x, this.b.position.y);
  }
}
