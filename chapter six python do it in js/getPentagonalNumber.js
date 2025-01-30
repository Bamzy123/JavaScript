function getPentagonalNumber(n) {
    return (n * (3 * n - 1)) / 2;
}

for (let i = 1; i <= 10; i++) {
    console.log(getPentagonalNumber(i));
}
