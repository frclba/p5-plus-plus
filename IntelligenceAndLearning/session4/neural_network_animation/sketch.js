let network;

function setup(){
  createCanvas(640, 360);

  network = new Network();

  //Inputs
  let in0 = new Neuron(-200, -75);
  let in1 = new Neuron(-200, 75);
  //Hidden
  let hid0 = new Neuron(0, -75);
  let hid1 = new Neuron(0, 75);

  //Output
  let out = new Neuron(200, 0);


  network.connect(in0, hid0);
  network.connect(in0, hid1);
  network.connect(in1, hid0);
  network.connect(in1, hid1);
  network.connect(hid0, out);
  network.connect(hid1, out);


  network.addNeuron(in0);
  network.addNeuron(in1);
  network.addNeuron(hid0);
  network.addNeuron(hid1);
  network.addNeuron(out);
}

function draw(){
  background(200);
  translate(width/2, height/2);
  network.show();
  network.update();
  if (frameCount % 30 == 0){
    let inputs = [random(1), random(1)]
    network.feedforward(inputs);
  }
}
