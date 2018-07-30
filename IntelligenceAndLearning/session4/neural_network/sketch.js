let network;

function setup(){
  createCanvas(640, 360);

  network = new Network();

  //Inputs
  let in0 = new Neuron(-200, -75);
  let in1 = new Neuron(-200, 75);

  //Hidden
  let hid0 = new Neuron(0, -50);
  let hid1 = new Neuron(0, 50);
  // let hid2 = new Neuron(0, 75);
  // let hid3 = new Neuron(0, 150);

  //Output
  let out = new Neuron(200, 0);


  network.connect(in0, hid0);
  network.connect(in0, hid1);
  // network.connect(in0, hid2);
  // network.connect(in0, hid3);

  network.connect(in1, hid0);
  network.connect(in1, hid1);
  // network.connect(in1, hid2);
  // network.connect(in1, hid3);

  network.connect(hid0, out);
  network.connect(hid1, out);
  // network.connect(hid2, out);
  // network.connect(hid3, out);


  network.addNeuron(in0);
  network.addNeuron(in1);
  network.addNeuron(hid0);
  network.addNeuron(hid1);
  // network.addNeuron(hid2);
  // network.addNeuron(hid3);
  network.addNeuron(out);
}

function draw(){
  noLoop();
  background(200);
  translate(width/2, height/2);
  network.show();
}
