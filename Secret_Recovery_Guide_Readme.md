
# 📘 Secret Recovery Assignment – Full Guide

## 🧾 Objective

This project reconstructs a secret constant `c` from a polynomial of degree `m = k - 1`, using `k` decoded points from a given JSON file. The challenge includes base-decoding the `y` values and applying interpolation methods to solve the polynomial.

---

## 🧩 Based On

A simplified version of **Shamir’s Secret Sharing Scheme**, where:
- The **secret is the constant term `c`** of the polynomial.
- We use `k` decoded (x, y) points to reconstruct a polynomial of degree `k - 1`.

---

## 🧠 Concepts to Learn (for Interviews)

### 1. Shamir’s Secret Sharing
- Splits a secret using a polynomial.
- Needs `k` out of `n` points to reconstruct the polynomial.

### 2. Polynomial Interpolation
- Use **Lagrange Interpolation** or matrix methods to rebuild the polynomial.
- Focus on finding the **constant term** `c`.

### 3. BigInt in JavaScript
- Use `BigInt` to handle large decoded values beyond normal JS number limits.

### 4. Combinatorics (nCk)
- Try all combinations of `k` shares from `n` when filtering out incorrect ones.

---

## 📦 Input Format

```json
{
  "keys": { "n": 4, "k": 3 },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
}
```

- `"keys"`: Contains metadata: `n` and `k`
- Each number key (like `"2"`) is:
  - `x`: the key as number
  - `y`: value decoded from `value` with given `base`

---

## ✅ Assignment Tasks

### Step 1: Read JSON File
- Parse the test case input from the JSON file using Node.js (`fs.readFileSync`).

### Step 2: Decode the `y` Values
- Convert each value string from its given base to decimal using `parseInt(value, base)`.

### Step 3: Prepare Points
- Extract points as (x, y) using:
  ```js
  const x = Number(key);
  const y = BigInt(parseInt(valueString, base));
  ```

### Step 4: Polynomial Interpolation
- Use **Lagrange Interpolation** to reconstruct the polynomial of degree `k - 1`.
- Extract the constant term (`c`) as the **final secret**.

### Step 5: Print Results
- Calculate and print `c` (secret) for both test cases provided in the assignment.

---

## 🔁 Sample Output

```
Secret 1: 3
Secret 2: 12345678901234567890
```

---

## 🔍 Hints for Solving

- `k = m + 1`: You need `k` points to solve a polynomial of degree `m`.
- Decode base values accurately.
- Use `BigInt` everywhere to avoid overflow.
- Try solving the polynomial manually on paper for verification.

---

## 📁 Folder Structure

```
secret-recovery/
├── input1.json            # First test case input
├── input2.json            # Second test case input
├── index.js               # Main logic
├── README.md              # This guide
```

---

## 📚 Learn Before Interview

| Concept              | Time Needed | Learn From |
|----------------------|-------------|------------|
| Shamir Secret Sharing| 30 mins     | YouTube, Blogs |
| Lagrange Interpolation | 45 mins   | 3Blue1Brown, Khan Academy |
| BigInt in JavaScript | 15 mins     | MDN Docs |
| Combinatorics        | 20 mins     | Visual Examples |
| Fault Tolerance      | 10 mins     | This project itself |

---

## 🧠 Final Note

You don't need to be an expert in math. Just understand the high-level idea:
- Decode the values
- Use interpolation to find `c`
- Avoid overfitting—focus on filtering incorrect points

Good luck! You're already doing great 🚀
