# Secret Recovery (Simple Project)

This project reconstructs a secret number (the constant term `c` of a polynomial) from a set of encoded points using Lagrange interpolation (like a basic version of Shamir's Secret Sharing).

## How to Use

1. Place your input file (like `input1.json` or `input2.json`) in this folder.
2. Run the script:

```sh
node index.js input1.json   # For the first test case
node index.js input2.json   # For the second test case
```

If you don't provide a filename, it will use `input1.json` by default.

## Examples

### Sample input 1 (`input1.json`):
```json
{
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
}
```

### Sample input 2 (`input2.json`):
```json
{
  "keys": {
    "n": 10,
    "k": 7
  },
  "1": { "base": "6", "value": "13444211440455345511" },
  "2": { "base": "15", "value": "aed7015a346d63" },
  "3": { "base": "15", "value": "6aeeb69631c227c" },
  "4": { "base": "16", "value": "e1b5e05623d881f" },
  "5": { "base": "8", "value": "316034514573652620673" },
  "6": { "base": "3", "value": "2122212201122002221120200210011020220200" },
  "7": { "base": "3", "value": "20120221122211000100210021102001201112121" },
  "8": { "base": "6", "value": "20220554335330240002224253" },
  "9": { "base": "12", "value": "45153788322a1255483" },
  "10": { "base": "7", "value": "1101613130313526312514143" }
}
```

## Output

The script will print the constant term `c` (the secret) for each test case. If there are more than `k` shares, it will try all combinations and print the most common secret found.

## Files
- `index.js` – Main script
- `input1.json` – First test case
- `input2.json` – Second test case
- `README.md` – This file

---

**No extra dependencies. Just Node.js!** 