let forms = [];
let num;
let formLen;
let pallete;
let col;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  pallete = ["#540d6e", "#ee4266", "#ffd23f", "#2f92fc", "#232323"];
  newForm();
}

function draw() {
  background(255);
  for (let i = 0; i < forms.length; i++) {
    forms[i].run();
  }
  if (frameCount % (60 * 10) == 0) {
    newForm();
  }
}

function newForm() {
  let s = 600;
  let hs = s / 2;
  forms.length = 0;
  num = 0;
  col = random(pallete);
  divideRect((width / 2) - hs, (height / 2) - hs, s, s, s * 0.4);
  formLen = forms.length;
}

function divideRect(x, y, w, h, min) {
  if (w + h > min) {
    if (w >= h) {
      let rndw = random(0.05, 0.95) * w;
      divideRect(x, y, rndw, h, min);
      divideRect(x + rndw, y, w - rndw, h, min);
    }
    if (w < h) {
      let rndh = random(0.05, 0.95) * h;
      divideRect(x, y, w, rndh, min);
      divideRect(x, y + rndh, w, h - rndh, min);
    }
  } else {
    forms.push(new Form(x + (w / 2), y + (h / 2), w, h, num));
    num++;
  }
}

function easeInOutExpo(t, b, c, d) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

class Form {
  constructor(x, y, w, h, n) {
    this.x = x;
    this.y = y;
    this.tgtw = w;
    this.w = 0;
    this.tgth = h;
    this.h = 0;
    this.num = n;
    this.t = -this.num;
    this.rnd = random(1);
    this.angle = HALF_PI;
    this.toggle = true;
    this.circleS = 0;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(col);
    stroke(col);
    if (this.t > 0) {
      ellipse(0, 0, this.circleS, this.circleS);
      rect(0, 0, this.w, this.h);
    }
    pop();
  }

  move() {
    let t0 = 0;
    let t1 = 70 + t0
    let t2 = 60 + t1;
    let t3 = 70 + t2;
    let t4 = 40 + t3;
    let end = t4 + 20 + (formLen - this.num) / 2;

    if (t0 <= this.t && this.t < t1) {
      this.circleS = lerp(0, (this.tgtw + this.tgth) * 0.1, this.easing(t0, t1 - 1));
    }
    if (t1 <= this.t && this.t < t2) {
      if (this.rnd < 0.5) {
        this.w = 0;
        this.h = lerp(1, this.tgth, this.easing(t1, t2 - 1));
      } else {
        this.h = 0;
        this.w = lerp(1, this.tgtw, this.easing(t1, t2 - 1));
      }
    }
    if (t2 <= this.t && this.t < t3) {
      if (this.rnd < 0.5) {
        this.w = lerp(0, this.tgtw, this.easing(t2, t3 - 1));
      } else {
        this.h = lerp(0, this.tgth, this.easing(t2, t3 - 1));
      }
      this.circleS = lerp((this.tgtw + this.tgth) * 0.1, 0, this.easing(t2, t3 - 1));
    }
    if (t3 <= this.t && this.t < t4) {
      this.angle = lerp(HALF_PI, 0, this.easing(t3, t4 - 1));
    }

    if (this.t > end) {
      this.toggle = false;
    }
    if (this.toggle) {
      this.t++;
    } else {
      this.t--;
    }
  }

  easing(start, end) {
    let amt1 = map(this.t, start, end, 0, 1);
    let amt2 = easeInOutExpo(amt1, 0, 1, 1);
    return amt2;
  }

  run() {
    this.show();
    this.move();
  }
}