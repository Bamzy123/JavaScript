function addTwoNumbers(firstNumber, secondNumber) {
	let answer = firstNumber + secondNumber;
	return answer;
}

function multiply(numberOne, nummberTwo){
	let result = numberOne * nummberTwo;
	return result;
}

const getOddNumbers = (arr)=>{
	let newArray = [];
	let count = 0; 
	for (index in arr){
		if (arr[index] % 2 != 0) {
			newArray[count++] = arr[index]
      }
   }
   return newArray;
}

function divideTwoNumbers(firstNumber, secondNumber){
	let answer = firstNumber / secondNumber;
	return answer;
}

module.exports = {addTwoNumbers, multiply, getOddNumbers, divideTwoNumbers};