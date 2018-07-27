let data = [];

let m = 1;
let b = 0;

function setup(){
  createCanvas(600, 600);
}

function linearRegression(){
  let xsum = 0;
  let ysum = 0;

  for(let i = 0; i < data.length; i++){
    xsum += data[i].x;
    ysum += data[i].y;
  }
  let xmean = xsum / data.length;
  let ymean = ysum / data.length;

  let numerator = 0;
  let denominator = 0;
  for(let i = 0; i < data.length; i++){
    numerator += (data[i].x - xmean) * (data[i].y - ymean);
    denominator += pow(data[i].x - xmean, 2);
  }
  if(denominator != 0)
    m = numerator / denominator;

  b = ymean - m * xmean;
}

function drawLine(){
   let x1 = 0;
   let y1 = m * x1 + b;
   let x2 = 1;
   let y2 = m * x2 + b;

   x1 = map(x1, 0, 1, 0, width);
   y1 = map(y1, 0, 1, height, 0);
   x2 = map(x2, 0, 1, 0, width);
   y2 = map(y2, 0, 1, height, 0);
   stroke(255, 0, 255);
   line(x1, y1, x2, y2);
}

function mousePressed(){
  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0);

  let point = createVector(x, y);
  data.push(point);
}

function draw(){
  background(51);
  for (let i = 0; i < data.length; i++){
    let x = map(data[i].x, 0, 1, 0, width);
    let y = map(data[i].y, 0, 1, height, 0);

    fill(255);
    stroke(255);
    ellipse(x, y, 8, 8);
  }
  if(data.length > 1){
    linearRegression();
    drawLine();
  }
}
