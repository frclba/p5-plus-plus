async function getData() {
	const response = await fetch('ZonAnn.Ts.csv');
	const data = await response.text();
	console.log(data);

	const rows = data.split('\n').slice(0);
	rows.forEach(element => {
		const row = element.split(',');
		const year = row[0];
		const temp = row[1];
		console.log(year, temp);
	});
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	getData();
}

function draw() {

}