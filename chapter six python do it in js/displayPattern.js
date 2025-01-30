const prompt = require('prompt-sync')();
function displayPattern(n) {
	let count = n;
	let asteriks = '';
  	for (let number = 1; number <= count; number++) {
    		let pattern = '';
    		for (let value = 1; value <= number; value++) {
      		pattern += value + ' ';
    		}
  		asteriks += pattern + '\n'; 
	}	
	return asteriks
};
let n = prompt("Enter your number to be printed in right angle: ");
console.log(displayPattern(n))