let sprtesheet;
let spritedata;

let animation = [];
let horse_array = [];


function preload(){
  spritedata = loadJSON('media/horse.json');
  spritesheet = loadImage('media/horse.png');
}

function setup(){
  createCanvas(windowWidth, 480);
  let frames = spritedata.frames;

  for(let i = 0; i< frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for(let i = 0; i < 5; i++){
    horse_array[i] = new Sprite(animation, 0 , i * 75, random(0.1, 0.3));
  }
}

function draw(){
  background(34,139,34);

  for(let horse of horse_array){
    horse.show();
    horse.animate();
  }
}
