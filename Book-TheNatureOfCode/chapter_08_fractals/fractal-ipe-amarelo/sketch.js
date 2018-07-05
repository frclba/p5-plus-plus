// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var tree = [];
var leaves = [];

function setup() {
  createCanvas(640, 360);
  var branch = new Branch(createVector(width / 2, height), createVector(0, -1), 100);
  tree.push(branch);
}

function draw() {
  background(255);
  for (var i = 0; i < tree.length; i++) {
    tree[i].update();
    tree[i].render();

    if (tree[i].timeToBranch())
    {
      if (tree.length < 900) {
        tree.push(tree[i].branch(int(random(0, 50)))); // Add one going right
        tree.push(tree[i].branch(int(random(0, -50)))); // Add one going left
      }
      else {
        leaves.push(new Leaf(tree[i].end));
      }
    }
  }
  for (var i = 0; i < leaves.length; i++) {
    leaves[i].display();
    leaves[i].update();
  }
}
