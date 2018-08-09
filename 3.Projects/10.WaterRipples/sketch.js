const damping = 0.999;

let buffer2;
let buffer1;

let kernel;

function setup() {
  let canvas = createCanvas(333, 333);

  damping = tf.scalar(0.99);
  buffer1 = tf.zeros([height, width, 1], 'float32');
  buffer2 = tf.zerosLike(buffer1);

  kernel = tf.tensor([
    0.0, 0.5, 0.0,
    0.5, 0.0, 0.5,
    0.0, 0.5, 0.0
  ]).as4D(3, 3, 1, 1);
}

function mouseDragged(){
  let copyTensor = buffer1.buffer();
  copyTensor.set(1, mouseY, mouseX, 0);
  buffer1 = copyTensor.toTensor();
}

function draw() {
  buffer1 = tf.tidy(() => {
    let temp1 = tf.conv2d(buffer1, kernel, 1, 'same');
    let temp2 = temp1.sub(buffer2).mul(damping).clipByValue(0, 1);

    buffer2.dispose();
    buffer2 = buffer1;

    return temp2;
  });

tf.tidy(() => (tf.toPixels(buffer1, canvas), null));
}
