function setup() {
	noCanvas();
	console.log("Acrostic");

	let button = select('#submitbutton');
	let input = select('#inputfield');

	button.mousePressed(makeAcrostic);

	function makeAcrostic(){
		let word = input.value();
		console.log(word);

		for(let i = 0; i < word.length; i++){
			createDiv(word.charAt(i));
		}
	}
}
