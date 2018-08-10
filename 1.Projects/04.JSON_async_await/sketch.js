let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
let giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=G&api_key=dc6zaTOxFJmzC&q=";

function setup() {
	noCanvas();

	wordGif().then(results =>{
		createP(results.word);
		createImg(results.img);
	}).catch(err => console.error(err));

	// fetch(wordnikAPI)
	// 	.then(response => response.json())
	// 	.then(json => {
	// 		createP(json.word);
	// 		return fetch(giphyAPI + json.word);
	// 	})
	// 	.then(response => response.json())
	// 	.then(json => {
	// 		createImg(json.data[0].images['fixed_height_small'].url)
	// 	})
	// 	.catch(err => console.error(err));
}


async function wordGif(){
	let responseWord = await fetch(wordnikAPI);
	let jsonWord = await responseWord.json();
	let responseGif = await fetch(giphyAPI + jsonWord.word);
	let jsonGif = await responseGif.json();
	let img_url = jsonGif.data[0].images['fixed_height_small'].url

	return {
		word: jsonWord.word,
		img: img_url
	}
}
