function isPalindrome(number) {
    let digit = number.length - 1;
    for (let index = 0; index < number.length / 2; index++) {
	if (number[index] != number[digit]) {
		return false;
	}
	digit--;
   }
   return true;
}

let number = 121;
console.log(isPalindrome(number))