function reverse(number) {
	let reversed = 0;
	while (number > 0) {
	     let digit = number % 10;
	     reversed = reversed * 10 + digit;
	     number = Math.floor(number / 10);
   }
    return reversed;
}
let number = 12345;
console.log(reverse(number));