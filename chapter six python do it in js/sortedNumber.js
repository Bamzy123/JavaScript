function displaySortedNumbers(num1, num2, num3) {
  let numbers = [num1, num2, num3];
  numbers.sort((a, b) => a - b);
  return numbers.toString();
}
console.log(displaySortedNumbers(25, 15, 20));