let rows;
let cols;
let damping;

let current;
let previous;

let canv;
let kernel;

function MousePressed(){

}

function setup() {
  canv = createCanvas(600, 400);
  cols = width;
  rows = height;

  damping = tf.scalar(0.99);
  current = tf.zeros([cols, rows, 1]);
  previous = tf.zerosLike(current);

  kernel = tf.tensor([
    0.0, 0.5, 0.0,
    0.5, 0.0, 0.5,
    0.0, 0.5, 0.0
  ]).as4D(3, 3, 1, 1);
}


function draw() {
  let next = tf.conv2d(previous, kernel, 1, 'same');
  next = next.sub(current).mul(damping);

  // display the water Ripples
  tf.toPixels(next, canv.elt);

  // swapping
  let temp = previous;
  previous = current;
  current = next;
}
