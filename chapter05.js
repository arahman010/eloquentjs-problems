/*
 * Add your solutions to the chapter 5 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */
const ancestry = require('./ancestry');

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


// Problem 1: Flattening
function flatten(arrays) {
 	return arrays.reduce(function(a, b) {
		return a.concat(b);
	}, []);
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
	ageDifference = []
	for(let each in byName) {
		if(byName[byName[each].mother] != null){
			ageDifference.push(byName[each].born - byName[byName[each].mother].born);
		}
	}
	return average(ageDifference);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
	let lifeExpMap = {}
	let century;
	for(let each in byName){
		century = Math.ceil(byName[each].died/100);
		if(century in lifeExpMap){
			lifeExpMap[century].push(byName[each].died - byName[each].born);
		}
		else {
			lifeExpMap[century] = [byName[each].died - byName[each].born];

		}
	}

	for (let eachCentury in lifeExpMap){
		lifeExpMap[eachCentury] = average(lifeExpMap[eachCentury]);
	}

	return lifeExpMap;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

