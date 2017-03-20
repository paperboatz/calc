// ======== Step ==========

// terminal command: node -e "require('./app').total(\"\$1299.99\", 3, \"food\")"
// We see user inputs dollar value with commas in the example?
// we will apply that change in input and output 


module.exports.total = function(input, numPersons, type){

  var total = '';
  var endOutput = '';

  var input = input.substring(1);
  var inputStripped = parseFloat(input.replace(/,/g, ''))
  var baseMarkup = inputStripped * 1.05;

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
  var totalDec = total.toFixed(2);
  totalCommas = totalDec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  endOutput = '$' + totalCommas;

  console.log(endOutput); 
}



