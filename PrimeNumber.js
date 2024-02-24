function PrimeNumber(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      count++;
    }
    if (count === 2) {
      console.log("Prime Number", i);
    } else {
      console.log("Non - Prime Number");
    }
  }
  return count;
}
module.exports = { PrimeNumber };
