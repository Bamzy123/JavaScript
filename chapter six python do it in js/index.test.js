const {multiply, addTwoNumbers, getOddNumbers} = require("./index.js");

test('multiply two numbers', ()=> {
	let numberOne = 2;
	let numberTwo = 6;
	let result = multiply(numberOne, numberTwo); // Act
	let answer = 12;
	expect(result).toBe(answer); // Assert
})

test('add two numbers', ()=> {
	let firstNumber = 4;
	let secondNumber = 4;
	let sum = addTwoNumbers(firstNumber, secondNumber);
	let answer = 8;
	expect(sum).toBe(answer);
})

test('return odd numbers', ()=>{
	let arrayOfNumbers = [1,2,3,4,8,5];
	let result = getOddNumbers(arrayOfNumbers);
	let answer = [1,3,5];
	expect(result).toEqual(answer);
})

test('divide two numbers', ()=> {
	let firstNumber = 8;
	let secondNumber = 4;
	let divide = divideTwoNumbers(firstNumber, secondNumber);
	let answer = 2;
	expect(divide).toBe(answer);
})