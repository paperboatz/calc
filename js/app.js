// ======== Step ==========


// export module so it can be executed via command line with node
// in terminal: node -e "require('./app').total(1299.99, 3, \"food\")"

module.exports.total = function(input, numPersons, type){

	var baseMarkup = input * 1.05;
	var endTotal = '';

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

  	endTotal = baseMarkup + personTotal(numPersons, baseMarkup) + typeTotal(type, baseMarkup);
    console.log(endTotal); 
}


