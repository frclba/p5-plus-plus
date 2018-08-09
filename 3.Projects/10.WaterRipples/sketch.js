let buffer1, buffer2;
let kernel;
let canvas;

function setup() {
  canv = createCanvas(333, 333);

  damping = tf.scalar(0.99);
  buffer1 = tf.zeros([width, height, 1]);
  buffer2 = tf.zerosLike(buffer1);

  kernel = tf.tensor([
    0.0, 0.5, 0.0,
    0.5, 0.0, 0.5,
    0.0, 0.5, 0.0
  ]).as4D(3, 3, 1, 1);
}

function draw() {
  let tempTensor = tf.tidy(() => {
    let aux = tf.conv2d(buffer1, kernel, 1, 'same');
    return aux.sub(buffer2).mul(damping).clipByValue(0, 1);
  });

  // display the water Ripples
  const pixels = tf.clipByValue(tempTensor, 0, 1);
  tf.toPixels(pixels, canv.elt).then(() => pixels.dispose());
  buffer2.dispose();

  // Swapping
  buffer2 = buffer1;
  buffer1 = tempTensor;
}

function mouseDragged(){
  let copyTensor = buffer1.buffer();
  copyTensor.set(10, mouseY, mouseX, 0);
  buffer1 = copyTensor.toTensor();
}
