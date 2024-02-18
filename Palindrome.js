function Palindrome(n) {
  let original = n;
  let reverse = 0;
  while (n > 0) {
    let ld = n % 10;
    n = Math.floor(n / 10);
    reverse = reverse * 10 + ld;
  }
  if (original === reverse) {
    return "Its Palindrome";
  } else {
    return "Its not a Palindrome";
  }
}
module.exports = { Palindrome };
