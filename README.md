# Secret Recovery (Simple Project)

This project reconstructs a secret number from a set of encoded points using Lagrange interpolation (like a basic version of Shamir's Secret Sharing).

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
  "keys": { "n": 4, "k": 3 },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" }
}
```
Sample output:
```
Secret: 3
```

### Sample input 2 (`input2.json`):
```json
{
  "keys": { "n": 5, "k": 3 },
  "1": { "base": "10", "value": "12345678901234567890" },
  "2": { "base": "16", "value": "AB54A98CEB1F0AD2" },
  "3": { "base": "10", "value": "37037036703703703670" }
}
```
Sample output:
```
Secret: 12345678901234567890
```

## Files
- `index.js` – Main script
- `input1.json` – Example input 1
- `input2.json` – Example input 2
- `README.md` – This file

---

**No extra dependencies. Just Node.js!** 
