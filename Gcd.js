function Gcd(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;
  }
  if (a === 0) return b;
  return a;
}
module.exports = { Gcd };
