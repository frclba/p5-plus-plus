let axiom = "F";
let sentence = axiom;
let angle;
let size = 100;

let rules = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function setup() {
  createCanvas(400, 400);
  angle = radians(25);
  background(51);
  turtle();

  let button = createButton("generate");
  button.mousePressed(generate);
}

function generate(){
  size *= 0.5;
  let nextSentence = "";
  for(let i = 0; i < sentence.length; i++ ){
    let current = sentence.charAt(i);
    let found = false;

    if(current == rules.a) {
      found = true;
      nextSentence += rules.b;
    }

    if(!found){
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  turtle();
}

function turtle(){
  resetMatrix();
  translate(width/2, height);
  stroke(255, 100);

  for(let i = 0; i < sentence.length; i++){
    let current = sentence.charAt(i);
    if(current == "F"){
      line(0,0,0, -size);
      translate(0, -size);
    }
    else if(current == "+"){
      rotate(angle);
    }
    else if(current == "-"){
      rotate(-angle);
    }
    else if(current == "["){
      push();
    }
    else if (current == "]") {
      pop();
    }
  }
}
