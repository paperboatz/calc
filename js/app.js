// 1) Steps involved

// I deconstruct the problem
// pseudo code the steps involved

// 1) Need a input for user. The base price
// 2) flat markup of 5%. Base price * 5%;
// 3) all other markups on top... soo
// 4) Figure out person mark up
// 5) figure out type of materials, if / else statments
// 6) add them up for total output 
// 7) See if user wants to add another job
// 8) have a visual output for customer with a breakdown of costs

// 2) Hard code to retrieve correct values

let input = 1299.99;

let baseMarkup = input * 1.05;

let personPercent = 3 * 0.012;

let personAdd = baseMarkup * personPercent;

let food = baseMarkup * 0.13;

let output = food + baseMarkup + personAdd;

console.log(output); // output was correct! 









