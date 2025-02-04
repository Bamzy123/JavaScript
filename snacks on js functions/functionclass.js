/*
function getName() {
	return "stephen"
};
console.log(getName());


//function expression
//need to be assign to a variable name
const greet = function() {
	return "greet"
}

JavaScript Funtion
NOTE:three equal compare both the data types and values while two equal compare only the values.

1. nested functions
-> function assertEquals() {

	function getMen() {
		let numberOfMen = 23;
		return numberOfMen
   };

   function getLadies() {
	let  numberOfLadies = 6;
   };

 return getMen() === getLadies()
};
console.log(assertEquals());

2. arrow function
NOTE: The arrow function works with a function expression
-> function assertEquals() {

	 const getMen = () => {
		let numberOfMen = 23;
		return numberOfMen
   };

3. Function as a return object
function count() {
	let value = 0;

	return{
		increment: function(){
		  return value++
	},
		decrement: () =>{
		  return value--
	},
		getValue: function(){
		  return value
	}
   }
};
let counter = count()
counter.increment();
console.log(counter.getValue());

4. function as argument
NOTE: 
let firstName = "stephen"
-> function greet(name){
	return `Hello ${Hello}`
};

function executeFuntion(callBack, userName){
	return callBack(userName)
}
let result = executeFunction(greet, firstName)
console.log(result)
*/

function count() {
	let value = 0;

	function increaseValueByTwo() {
		let result = value + 2;
		console.log(value);
		console.log(result);
   }
increaseValueByTwo()
}
count()