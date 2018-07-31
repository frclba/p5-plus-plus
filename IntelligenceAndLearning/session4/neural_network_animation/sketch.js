let network;

function setup(){
  createCanvas(640, 360);

  network = new Network();

  //Inputs
  let in0 = new Neuron(-200, -75);
  let in1 = new Neuron(-200, 75);
  let in2 = new Neuron(-200, -150);
  //Hidden
  let hid0 = new Neuron(0, -75);
  let hid1 = new Neuron(0, 75);
  //Output
  let out = new Neuron(200, 0);

  //INPUT - HIDDEN
  // 0
  network.connect(in0, hid0);
  network.connect(in0, hid1);
  // 1
  network.connect(in1, hid0);
  network.connect(in1, hid1);
 // 2
  network.connect(in2, hid0);
  network.connect(in2, hid1);

  //HIDDEN - OUTPUTs
  network.connect(hid0, out);
  network.connect(hid1, out);

  //INPUT
  network.addNeuron(in0);
  network.addNeuron(in1);
  network.addNeuron(in2);
  //HIDDEN
  network.addNeuron(hid0);
  network.addNeuron(hid1);
  //OUTPUT
  network.addNeuron(out);
}

function draw(){
  background(200);
  translate(width/2, height/2);
  network.show();
  network.update();

  if (frameCount % 30 == 0){
    let inputs = [random(1), random(1), random(1)]
    network.feedforward(inputs);
  }
}
