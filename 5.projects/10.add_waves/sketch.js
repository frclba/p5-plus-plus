let canvas;
const waves = [{}, { offset: -0.5 }, { freq: 2 }];
const selected = [1, 2];

let _baseFreq = 3;
let _baseFreqTarget = 4;

let mouseIn = false;
let mouseClickedAt = { x: -1, y: -1, hasChecked: true };

function setup() {
	({ canvas } = createCanvas(windowWidth, windowHeight));
	canvas.addEventListener('mouseenter', () => (mouseIn = true));
	canvas.addEventListener('mouseleave', () => (mouseIn = false));
}

function getVars() {
	const mx = min(width, height) * 0.7;
	const mx_half = mx * 0.5;
	const h = mx * 0.2;
	const h_half = h * 0.5;
	const amp = h * 0.4;
	return { mx, mx_half, h, h_half, amp };
}

function mousePosToNewSpace(_x = mouseX, _y = mouseY) {
	const { mx_half, h } = getVars();
	const y = (_y + mx_half - height * 0.5) / mx_half;
	const wave = floor(y * mx_half / h);
	const x = _x - width * 0.5;
	return {
		x: abs(x) > mx_half * 1.1 ? null : constrain(x, -mx_half, mx_half),
		y,
		wave: wave < 0 || wave >= waves.length ? null : wave
	};
}

function yToWave(_y) {}

function draw() {
	background(51);
	translate(width % 2 ? 1 : 0.5, height % 2 ? 1 : 0.5);

	noFill();
	stroke(150);

	const width_half = width * 0.5;
	translate(width_half, height * 0.5);

	const { mx, mx_half, h, h_half, amp } = getVars();
	const sideTextMargin = mx * 1.05;

	const circRad = mx * 0.015;
	const rectWid = mx * 0.01;

	const mP = mousePosToNewSpace();
	const doMouseInteraction = mouseIn && mP.x !== null;
	const doHightlights = doMouseInteraction && mP.wave !== null;

	const intersect = round(!doMouseInteraction ? ((millis() * 0.0002) % 1) * mx - mx_half : mP.x);

	canvas.style.cursor = doHightlights ? 'pointer' : 'default';

	if (!mouseClickedAt.hasChecked) {
		mouseClickedAt.hasChecked = true;
		const { x, wave } = mouseClickedAt;
		if (wave === null || mP.x === null) {
			return;
		}
		const selectedIndex = selected.indexOf(wave);
		if (selectedIndex > -1) {
			selected.splice(selectedIndex, 1);
		} else {
			selected.push(wave);
		}
	}

	translate(0, h_half);
	doMouseInteraction && stroke(255, 0, 255);
	const vertLineY = mx_half + h * 0.625;
	line(intersect, -vertLineY, intersect, vertLineY - h_half);

	for (let _count = 21, i = 0; i < _count; i++) {
		const _x = 1 / (_count - 1) - 0.5;
		abs(_x) < 0.001 ? stroke(255, 150) : stroke(255, 25);
		const x = _x * mx;
		line(x, -vertLineY, x, vertLineY, -h_half);
	}

	translate(-mx_half, -mx_half);

	let mX = intersect + mx_half;
	let mY = 0;

	const _textSize = 25 / 500 * mx;
	textSize(_textSize);
	textFont('monospace');
	textAlign(CENTER, CENTER);

	_baseFreq = lerp(_baseFreq, _baseFreqTarget, 0.05);

	noStroke();
	fill(255);
	const textY = -mx * 0.04 - h * 0.6;
	text('Combining Waves', mx_half, textY - _textSize);
	textSize(_textSize * 0.75);
	text((-_baseFreq).toFixed(2) + ' PI', 0, textY);
	text('0', mx_half, textY);
	text(_baseFreq.toFixed(2) + ' PI', mx, textY);
	noFill();

	const baseFreq = _baseFreq * PI;
	const count = round(16 * _baseFreq);
	const newVerts = [];
	text(mP.wave, 0, 0);

	for (let index = 0; index < waves.length; index++) {
		const isSelected = selected.includes(index);
		const yOff = index * h;
		noStroke();
		doHightlights && mP.wave === index ? fill(255, 0, 255) : fill(255);

		textAlign(RIGHT, CENTER);
		textSize(_textSize * 0.5);
		text('1', sideTextMargin, yOff - amp);
		text('0', sideTextMargin, yOff);
		text('-1', sideTextMargin, yOff + amp);
		noFill();

		stroke(255, 120);
		line(0, yOff, mx, yOff);
		stroke(255, 50);
		line(0, yOff - amp, mx, yOff - amp);
		line(0, yOff + amp, mx, yOff + amp);

		let { freq = 1, offset = 0 } = waves[index];
		offset *= PI;
		stroke(0, 190, 255);
		const t = map(mX, 0, mx, -1, 1);
		const _y = -sin(t * baseFreq * freq * offset) * amp;
		if (isSelected) {
			mY += _y;
		}
		rect(mX - rectWid * 0.5, yOff, rectWid, _y);
		ellipse(mX, _y + yOff, circRad);

		beginShape();
		for (let i = -1; i <= count; i++) {
			const t = i / (count - 1);
			const x = t * mx;
			const y = -sin((t * 2 - 1) * baseFreq * freq + offset) * amp;
			let { [i]: existing } = newVerts;
			if (!existing) {
				existing = newVerts[i] = { x, y: 0 };
			}
			if(isSelected) {
				existing.y += y;
			}
			curveVertex(x, y + yOff);
		}
		isSelected ? stroke(0, 255, 0) : stroke(255);
		endShape();
	}

	const finalVerts = newVerts;
	translate(0, mx*0.2 * (waves.length+1));

	stroke(255, 120);
	line(0,0,mx,0);
	stroke(255, 50);
	line(0, -amp * 2, mx, -amp * 2);
	line(0, -amp, mx, -amp);
	line(0, amp, mx, amp);
	line(0, amp * 2, mx, amp * 2);

	textAlign(RIGHT, CENTER);
	textSize(_textSize * 0.5);
	noStroke();
	fill(255);
	text('2', sideTextMargin, -amp * 2);
	text('1', sideTextMargin, -amp);
	text('0', sideTextMargin, 0);
	text('-1', sideTextMargin, amp);
	text('-2', sideTextMargin, amp * 2);
	noFill();

	stroke(0, 190, 255);
	rect(mX - rectWid * 0.5, 0, rectWid, mY);
	ellipse(mX, mY, circRad);

	stroke(255, 0, 255);
	beginShape();
	for(let i = -1; i < finalVerts.length; i++) {
		const {x, y} = finalVerts[i];
		curveVertex(x, y);
	}
	endShape();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
	mouseClickedAt.hasChecked = false;
	Object.assign(
		mouseClickedAt,
		mousePosToNewSpace(mouseX, mouseY)
	);
}

function mouseWheel(event) {
	const val = _baseFreqTarget + event.delta / 100 / 4;
	_baseFreqTarget = constrain(val, 0.25, 15);
}
