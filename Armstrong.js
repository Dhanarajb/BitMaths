function ArmStrong(n) {
  let original = n;
  let sum = 0;

  while (n > 0) {
    ld = n % 10;
    console.log("ld", ld);
    sum = sum + ld * ld * ld;
    console.log("sum", sum);
    n = Math.floor(n / 10);
    console.log("n", n);
  }
  if (sum === original) {
    console.log("Armstrong");
  } else {
    console.log("Non-Armstrong");
  }
  return sum;
}

module.exports = { ArmStrong };
