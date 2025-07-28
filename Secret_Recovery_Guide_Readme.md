
# Catalog Placements Assignment - Online

**Duration:** 70 mins  
**Testing Environment/IDE:** Use any IDE or environment you are comfortable with  
**Language:** Any language except **Python** is allowed  
**Submission:** Push the code to github and provide the link in submission [form](https://forms.office.com/r/gqG5rL6rLN) along with output.

---

## 📘 Problem Statement

In this assignment, you'll work on a simplified version of Shamir's Secret Sharing algorithm.

Consider an unknown polynomial of degree m. You would require m+1 roots of the polynomial to solve for the coefficients, represented as k = m + 1.

An unknown polynomial of degree m can be represented as:

```
f(x) = a_m x^m + a_{m-1} x^{m-1} + ... + a_1 x + c
```

Where:
- `f(x)` is the polynomial function
- `m` is the degree of the polynomial
- `a_m, a_{m-1}, ..., a_1, c` are coefficients (real numbers)
- `a_m ≠ 0` (since it's the highest degree term)

The task is to find the constant term i.e., `c` of the polynomial with the given roots. However, the points are not provided directly but in a specific format.

---

## 🧪 Sample Test Case:

```json
{
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": {
    "base": "10",
    "value": "4"
  },
  "2": {
    "base": "2",
    "value": "111"
  },
  "3": {
    "base": "10",
    "value": "12"
  },
  "6": {
    "base": "4",
    "value": "213"
  }
}
```

### ➕ Root Format Explanation:
```json
"2": {
  "base": "2",
  "value": "111"
}
```

Means:
- x = 2 (key)
- y = parseInt("111", 2) = 7
- So the point is (2, 7)

---

## ✅ You Can Use:

- Lagrange Interpolation  
- Matrix Method  
- Gaussian Elimination  

---

## 📋 Assignment Checkpoints:

1. **Read the Test Case (Input)** from a separate JSON file.
2. **Decode the Y Values** using the provided base.
3. **Find the Secret (`c`)** using any known interpolation method.

---

## 📌 Constraints:

- All coefficients are positive integers.
- Coefficients fit in a 256-bit integer.
- n ≥ k always.
- Degree of the polynomial `m = k - 1`.

---

## ✅ Output

Print the constant term `c` (the secret) for **both test cases**.

---

## 🧠 Hint

You can verify your output manually by solving the polynomial using the decoded points.

---

## 🧪 Second Test Case:

```json
{
  "keys": {
    "n": 10,
    "k": 7
  },
  "1": {
    "base": "6",
    "value": "13444211440455345511"
  },
  "2": {
    "base": "15",
    "value": "aed7015a346d63"
  },
  "3": {
    "base": "15",
    "value": "6aeeb69631c227c"
  },
  "4": {
    "base": "16",
    "value": "e1b5e05623d881f"
  },
  "5": {
    "base": "8",
    "value": "316034514573652620673"
  },
  "6": {
    "base": "3",
    "value": "2122212201122002221120200210011020220200"
  },
  "7": {
    "base": "3",
    "value": "20120221122211000100210021102001201112121"
  },
  "8": {
    "base": "6",
    "value": "20220554335330240002224253"
  },
  "9": {
    "base": "12",
    "value": "45153788322a1255483"
  },
  "10": {
    "base": "7",
    "value": "1101613130313526312514143"
  }
}
```
