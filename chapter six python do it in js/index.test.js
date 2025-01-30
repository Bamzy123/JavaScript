const multiply = require("./index.js");

test('multiply two numbers', ()=> {
	let numberOne = 2;
	let numberTwo = 6;
	let result = multiply(numberOne, numberTwo); // Act
	let answer = 12;
	expect(result).toBe(answer); // Assert
})