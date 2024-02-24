function PrintAllDivisions(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      console.log({ i });
    }
  }
}

module.exports = { PrintAllDivisions };
