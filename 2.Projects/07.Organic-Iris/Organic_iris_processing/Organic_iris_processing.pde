Iris[] newIris = new Iris[1000];

// noise factors
float noiseScale = 1500, noiseStrength = 250;

// noise display factors
float overlayAlpha = 0, irisAlpha = 255, strokeWidth = .3;

// main circle parameters
float radius = 100;
float rTemp = radius;

// animation related variables
float limit = 200, timer = 0;

// colors
color bckg = #000000, c1 = #ffffff;



void setup() {
  size(700, 700);
  smooth();
  background(bckg);

  for (int i = 0; i < newIris.length; i++) {
    newIris[i] = new Iris();
  }
}

void draw() {
  // background related
  fill(bckg, overlayAlpha);
  rect(-5, -5, width+10, height+10);

  if ( (timer = (timer + .5)) > limit - 20) {
    // this is for that quick fade at the end of a cycle
    fill(bckg, overlayAlpha + 40);
    rect(-5, -5, width+10, height+10);
  }

  // Animate Iris
  for (int i = 0; i < newIris.length; i++) newIris[i].drawIris(c1);

  // reset parameters every time 'limit' is hit
  if ( (timer = (timer + .5) % limit) == 0 ) {
    for (int i = 0; i < newIris.length; i++) {
      newIris[i].reDrawIt();
    }
  }
}


///////////////////////


class Iris {
  // x,y    = the current position
  // ox,oy  = the position, but slightly back in time
  // sx,sy  = start positions
  float x, y, ox, oy, sx, sy;

  float angle = 0, step;
  int NDo;
  boolean isOutside = false;

  Iris() {
    step = 5;
    NDo = int(random(360));
    sx = width/2  + radius * cos(NDo);
    sy = height/2 + radius * sin(NDo);
    x = sx;
    y = sy;
  }

  void drawIris(color cF) {
    // calculate angle which is based on noise
    // and then use it for x and y positions
    angle = noise(x / noiseScale, y / noiseScale) * noiseStrength;

    // write in the last value of x,y into ox,oy >> old x, old y
    // i need these values to display the line();
    ox = x;
    oy = y;

    // radius change for every cycle
    radius = rGen();

    // calculate new x and y position
    x += cos(angle) * step;
    y += sin(angle) * step;

    // what happens when x and y hit the outside
    if (x < -2) isOutside = true;
    else if (x > width + 2) isOutside = true;
    else if (y < -2) isOutside = true;
    else if (y > height + 2) isOutside = true;

    if (isOutside) {
      x = ox;
      y = oy;
    }

    // display it
    noFill();
    stroke(cF, irisAlpha);
    strokeWeight(strokeWidth);
    line(ox, oy, x, y);

    // return boolean to false for next cycle
    isOutside = false;
  }

  void reDrawIt() {
    // background reset
    fill(bckg);
    rect(-5, -5, width+10, height+10);

    // new noise
    noiseScale = int(random(400, 1700));
    noiseStrength = int(random(25,75));
    noiseDetail(int(random(1, 10)), 0.5);

    // parameters reset
    x = sx;
    y = sy;
    NDo = int(random(360));
    sx = width/2  + radius * cos(NDo);
    sy = height/2 + radius * sin(NDo);
    ox = x;
    oy = y;
  }
}

float rGen() {
  float r = random(0.65/2, 1.5) * rTemp;
  return r;
}
