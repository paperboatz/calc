// ======== Step ==========

// Created function to wrap so a user can enter one command to get an ouptut
// console.log to test 

// for typeTotal, I considered making if/else conditionals
// the reason I chose to use if statements was because
// in the example we were given "drugs" which could/could not fit into pharma type
// in my opinion better in the UI, a user would be given set options
// so they are forced to choose between these 4 categories
// or else we would have to make a list of what each type words could fit under type category === confusion

function total(input, numPersons, type){

	var baseMarkup = input * 1.05;

	function personTotal(numPersons, baseMarkup){
	  var personPercent = numPersons * 0.012;
	  var personTotal = baseMarkup * personPercent; 

	  return personTotal;
	}

	function typeTotal(type, baseMarkup){
	  if (type === 'pharmaceuticals'){
		return baseMarkup * 0.075;
	  }
	  if (type === 'food'){
		return baseMarkup * 0.13;
	  }
	  if (type === 'electronics'){
		return baseMarkup * 0.02;
	  }
	  if (type === 'else') {
		return baseMarkup;
	  }
    }

    return baseMarkup + personTotal(numPersons, baseMarkup) + typeTotal(type, baseMarkup);
}

console.log(total(1299.99, 3, 'food'));


