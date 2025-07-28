// secret-recovery/index.js
const fs = require('fs');

// Get filename from command line or default to input1.json
const filename = process.argv[2] || 'input2.json';
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

// Helper: Generate all combinations of k elements from arr
function combinations(arr, k) {
  const result = [];
  function backtrack(start, comb) {
    if (comb.length === k) {
      result.push(comb.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      comb.push(arr[i]);
      backtrack(i + 1, comb);
      comb.pop();
    }
  }
  backtrack(0, []);
  return result;
}

// Main logic: try all combinations if n > k
const n = data.keys.n;
const k = data.keys.k;
let secrets = {};
let maxCount = 0;
let mostCommonSecret = null;

if (points.length > k) {
  const combs = combinations(points, k);
  for (const comb of combs) {
    const secret = lagrangeConstant(comb).toString();
    secrets[secret] = (secrets[secret] || 0) + 1;
    if (secrets[secret] > maxCount) {
      maxCount = secrets[secret];
      mostCommonSecret = secret;
    }
  }
  console.log("All secrets found (with counts):");
  for (const [sec, count] of Object.entries(secrets)) {
    console.log(`  Secret: ${sec} (found ${count} times)`);
  }
  console.log("\nMost common secret:", mostCommonSecret);
} else {
  const secret = lagrangeConstant(points);
  console.log("Secret:", secret.toString());
} 