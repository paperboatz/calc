// ======== Step 2 ==========
// substitute hardcode with changable arguments
// create simple functions 

// Debug in console.log to check why I am not getting the same as my hardcode
// Noticed I was putting wrong argumetns in my function

const input = 5432.00;
let baseMarkup = input * 1.05;
let output = '';

function personTotal(numPersons, baseMarkup){
	let personPercent = numPersons * 0.012;
	let personTotal = baseMarkup * personPercent; 

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

output = baseMarkup + personTotal(1, baseMarkup) + typeTotal('pharmaceuticals', baseMarkup);

console.log(output); // great it works 




