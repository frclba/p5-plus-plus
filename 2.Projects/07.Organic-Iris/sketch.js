
// noise factors
let noiseScale = 1500, noiseStrength = 250;

// noise display factors
let overlayAlpha = 0, irisAlpha = 255, strokeWidth = .3;

// main circle parameters
let rTemp = 100;

// animation related variables
let limit = 200, timer = 0;

// colors
// let bckg = color('rgb(0,0,255)');
// let c1 = color('rgb(255,255,255)');



function setup() {
  createCanvas(700, 700);
  smooth();
  background(0,0,0);
}

function draw() {

  for (let i = 0; i < 100; i++){
    let newIris = new Iris();
    // console.log(newIris);
    
    // background related
    fill(255,255,255, overlayAlpha);
    rect(-5, -5, width+10, height+10);

    if ( (timer = (timer + .5)) > limit - 20) {
      // this is for that quick fade at the end of a cycle
      fill(155, 0, 0 , overlayAlpha + 40);
      rect(-5, -5, width+10, height+10);
    }

    // Animate Iris
    for (let i = 0; i < protection; i++)
      newIris.drawIris(0);

    // reset parameters every time 'limit' is hit
    if ( (timer = (timer + .5) % limit) == 0 ) {
      for (let i = 0; i < protection; i++) {
        newIris.reDrawIt();
      }
    }
  }
}

///////////////////////
