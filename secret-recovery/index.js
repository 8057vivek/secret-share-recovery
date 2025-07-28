// secret-recovery/index.js
const fs = require('fs');

// Get filename from command line or default to input1.json
const filename = process.argv[2] || 'input1.json';
const data = JSON.parse(fs.readFileSync(filename, 'utf-8'));

// Step 1: Parse points
const points = [];
for (const key in data) {
  if (key === 'keys') continue;
  const x = Number(key);
  const base = Number(data[key].base);
  const y = BigInt(parseInt(data[key].value, base));
  points.push({ x, y });
}

// Helper: GCD for BigInt
function gcd(a, b) {
  if (b === 0n) return a < 0n ? -a : a;
  return gcd(b, a % b);
}

// Helper: Rational number (numerator/denominator)
function addRational(a, b) {
  // a, b: {num, den}
  return simplifyRational({
    num: a.num * b.den + b.num * a.den,
    den: a.den * b.den
  });
}
function mulRational(a, b) {
  return simplifyRational({ num: a.num * b.num, den: a.den * b.den });
}
function simplifyRational(r) {
  const d = gcd(r.num, r.den);
  return { num: r.num / d, den: r.den / d };
}

// Step 2: Lagrange Interpolation at x=0 (to get the constant term)
function lagrangeConstant(points) {
  let secret = { num: 0n, den: 1n };
  for (let i = 0; i < points.length; i++) {
    let xi = BigInt(points[i].x);
    let yi = points[i].y;
    let term = { num: yi, den: 1n };
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      let xj = BigInt(points[j].x);
      term = mulRational(term, { num: -xj, den: xi - xj });
    }
    secret = addRational(secret, term);
  }
  // If denominator is 1 or -1, return integer, else return as fraction
  if (secret.den === 1n) return secret.num;
  if (secret.den === -1n) return -secret.num;
  if (secret.den < 0n) return (-secret.num) + '/' + (-secret.den);
  else return secret.num + '/' + secret.den;
}

const secret = lagrangeConstant(points);
console.log("Secret:", secret.toString()); 