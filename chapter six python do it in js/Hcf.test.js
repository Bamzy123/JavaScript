const assert = require('assert');
const { gcd, gcdArray, primeFactors } = require('./Hcf');

assert.strictEqual(gcd(48, 18), 6, 'gcd(48, 18) should return 6');
assert.strictEqual(gcd(4, 8), 4, 'gcd(4, 8) should return 4');
assert.strictEqual(gcd(6, 9), 3, 'gcd(6, 9) should return 3');

assert.strictEqual(gcdArray([4, 12, 8]), 4, 'gcdArray([4, 12, 8]) should return 4');
assert.strictEqual(gcdArray([6, 9, 15]), 3, 'gcdArray([6, 9, 15]) should return 3');

assert.deepStrictEqual(primeFactors(4), [2, 2], 'primeFactors(4) should return [2, 2]');
assert.deepStrictEqual(primeFactors(3), [3], 'primeFactors(3) should return [3]');