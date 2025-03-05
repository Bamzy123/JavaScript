function number() {}
function numbers(inputArray) {
    let count = {};

    inputArray.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    let output = {};

    for (let num in count) {
        let digit = count[num];
        output[num] = digit % 2 === 0 ? Number(num) : digit;
    }

    return output;
}

const inputArray = [2, 2, 1, 3, 5, 5];
console.log(numbers(inputArray));