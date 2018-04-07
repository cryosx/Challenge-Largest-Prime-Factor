exports.largestPrimeFactor = function(n) {
  function primeFactorization(num) {
    if (num < 2) {
      return { 1: 1 };
    }
    let result = {};

    for (let i = 2; i <= num; i++) {
      if (num === 1) {
        break;
      }
      if (num % i === 0) {
        if (result.hasOwnProperty(i)) {
          result[i]++;
        } else {
          result[i] = 1;
        }
        num = num / i;
        i = 1;
      }
    }
    return result;
  }
  let primesFactors = Object.keys(primeFactorization(n));

  return Number.parseInt(primesFactors[primesFactors.length - 1]);
};

// Sieve of Eratosthenes

// Input: an integer n > 1.

// Let A be an array of Boolean values, indexed by integers 2 to n,
// initially all set to true.

// for i = 2, 3, 4, ..., not exceeding √n:
//   if A[i] is true:
//     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
//       A[j] := false.

// Output: all i such that A[i] is true.
