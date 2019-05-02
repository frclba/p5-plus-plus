let arrIris = [];

// noise display factors
let overlayAlpha = 0;
let irisAlpha = 255;
let strokeWidth = 0.3;

// main circle parameters
let rTemp = 100;
let radius = 100

let noiseScale = 1500;
let noiseStrength = 250;

// animation related variables
let limit = 100;
let timer = 0;

// colors
let c1;
let bckg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // smooth();
  bckg = color(0,0,0);
  c1 = color(255,255,255);
  background(bckg);

  for (let i = 0; i < 3000; i++){
    arrIris.push(new Iris());
  }
}

function draw() {
  timer += 0.5;
  // background related
  fill(bckg, overlayAlpha);
  rect(-5, -5, width + 10, height + 10);

  if (timer > limit - 20) {
    // this is for that quick fade at the end of a cycle
    fill(bckg, overlayAlpha + 40);
    rect(-5, -5, width + 10, height + 10);

  }

  // Animate Iris
  fill(c1);
  for (let i = 0; i < arrIris.length; i++) {
    arrIris[i].drawIris();
  }

  // reset parameters every time 'limit' is hit
  if (timer % limit === 0) {
    for (let i = 0; i < arrIris.length; i++) {
      arrIris[i].reDrawIt();
    }
  }
}
///////////////////////
