function predictRatings(){
   let newUser = {};
   for(let i = 0; i < dropdownArray.length; i++){
     let title = dropdownArray[i].title;
     let rating = dropdownArray[i].value();

     if(rating == 'not seen'){
       rating = null;
     }

     newUser[title] = rating;
   }
   findNearestNeighbors(newUser);
}

function findNearestNeighbors(user){
  for(let i = 0; i < resultDivs.length; i++){
    resultDivs[i].remove();
  }
  resultDivs = [];
  let name = user.name;

  let similarityScores = {};

  for(let i = 0; i < data.users.length; i++){
    let otherUser = data.users[i];

    let score = euclidianDistance(user, otherUser);
    similarityScores[otherUser.name] = score;
  }
  data.users.sort(compareSimilarity);

  function compareSimilarity(a, b) {
    return similarityScores[b.name] - similarityScores[a.name];
  }

  for(let i = 0; i < titles.length; i++){
    let title = titles[i];
    if(user[title] == null){
      let k = 5;
      let weightedSum = 0;
      let similaritySum = 0;

      for(let j = 0; j < k; j++){
        let name = data.users[j].name;
        let sim = similarityScores[name];
        let ratings = data.users[j];
        let rating = ratings[title];

        if(rating != null){
          weightedSum += rating * sim;
          similaritySum += sim;
        }
      }

      let stars = nf(weightedSum / similaritySum, 1, 2);
      let div = createDiv(title + ': ' + stars);
      resultDivs.push(div);
      div.parent(resultP);

    }
  }
}


function euclidianDistance(ratingsUser1, ratingsUser2){

	let sumSquares = 0;
	for(let i = 0; i < titles.length; i++){
		let title = titles[i];
		if(ratingsUser1[title] && ratingsUser2[title]){
			let diff = ratingsUser1[title] - ratingsUser2[title];
			sumSquares += diff * diff;
		}
	}
	let distance = sqrt(sumSquares);
	let similarity = 1 / (1+distance);

	return similarity;
}
