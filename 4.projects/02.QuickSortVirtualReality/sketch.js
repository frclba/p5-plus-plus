let values;

function setup() {
	createCanvas(600, 400);
	values = [];
	for (let i = 0; i < width; i++) {
		values[i] = random(height);
	}
	quicksort(values, 0, values.length - 1);
}

function quicksort(arr, lo, hi) {
	if (lo < hi) {
		let mid = partition(arr, lo, hi);
		setTimeout(() => {
			quicksort(arr, lo, mid - 1);
			quicksort(arr, mid + 1, hi);
		}, 50);
	}
}

function partition(arr, low, high) {
	let pivot = arr[high];
	let i = (low - 1);
	for (let j = low; j <= high - 1; j++) {
		if (arr[j] <= pivot) {
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

function render() {
	setTimeout(() => {
		background(0);
		for (let i = 0; i < values.length; i++) {
			stroke(255);
			line(i, height, i, height - values[i]);
		}
	}, 50);
}

function swap(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
	render();
}