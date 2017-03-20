// ======== Step ==========

// export module so it can be executed via command line with node
// in terminal: node -e "require('./app').total(1299.99, 3, \"food\")"

// Noticed there is a "$" preceding input in the example
// so we will delete that in the function
// terminal command now: node -e "require('./app').total(\"\$1299.99\", 3, \"food\")"

// Make endOutput to two decimal points
// Initially had a Math.ceil() to round up, but noticed that for "drugs" in example, the output is NOT rounded
// instead just cut off to two decimals 

// add a dollarsign to the endOutput

// changed to else/if statment on typeTotal
// I want to catch if they choose anything other, the type will still be caught 

module.exports.total = function(input, numPersons, type){

  var total = '';
  var endOutput = '';

  var input = input.substring(1);
  var baseMarkup = input * 1.05;

  function personTotal(numPersons, baseMarkup){
	var personPercent = numPersons * 0.012;
	var personTotal = baseMarkup * personPercent; 

	return personTotal;
  }

  function typeTotal(type, baseMarkup){
	if (type === 'pharmaceuticals'){
	  return baseMarkup * 0.075;
	} else if (type === 'food') {
      return baseMarkup * 0.13;
	} else if (type === 'electronics'){
	  return baseMarkup * 0.02;
	} else {
	  return 0;
	}
  }

  total = baseMarkup + personTotal(numPersons, baseMarkup) + typeTotal(type, baseMarkup);
  endOutput = '$' + total.toFixed(2);

  console.log(endOutput); 
}



