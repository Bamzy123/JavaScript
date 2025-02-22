function gcd(a,b) {
    return b === 0 ? a : gcd(b,a % b);
}

function gcdArray(array) {
    return array.reduce((acc, num) => gcd(acc, num));
}

function primeFactors(n) {
    const factors = [];
    // Start with the smallest prime factor
    for (let index = 2; index <= n; index++) {
      while (n % index === 0) {
        factors.push(index);
        n /= index;
      }
    }
    return factors;
  }

  module.exports = { gcd, gcdArray, primeFactors };
// const input1 = [4, 12, 8];
// const hcf1 = gcdArray(input1);
// const output1 = primeFactors(hcf1);
// console.log(output1);
  
// const input2 = [6, 9, 15];
// const hcf2 = gcdArray(input2);
// const output2 = primeFactors(hcf2);
// console.log(output2);  