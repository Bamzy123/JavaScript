function sumDigits(n) {
    let sum = 0;
    n = Math.abs(n);

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}
console.log(sumDigits(123));