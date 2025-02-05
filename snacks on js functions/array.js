const array = []; //LITERAL MRTHOD

const arrayOfNumbers = new Array(); //ARRAY CONSTRUCTOR
arrayOfNumbers[0] = 20;
arrayOfNumbers[1] = 5;
arrayOfNumbers.unshift(1)
arrayOfNumbers.unshift(2);
arrayOfNumbers.unshift(3);

let shift = arrayOfNumbers.shift();
// console.log(shift);
// console.log(arrayOfNumbers);


// let firstName = "stephen"; //ARRAYOF

// let newArray = Array.from(firstName);

// console.log(newArray);


let animals = ["dog", "chick", "goat", "fish", "ship"];

// let answer = animals.splice();
console.log(animals.slice());
// console.log(animals);
// console.log(animals.slice(1,3));