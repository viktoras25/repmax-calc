# RepMax-calc

A library to estimate 1-Rep-Max using different formulas.

More information about [One-repetition maximum](https://en.wikipedia.org/wiki/One-repetition_maximum) (Wikipedia).

## Installation

```bash
npm install repmax-calc
```

### Usage

```javascript
import { RepCalculator } from 'repmax-calc'

const calc = new RepCalculator()

// Calculate 1RM with a specific formula
calc.getOneRepMax(Formula.Brzycki, 100, 8)

// Calculate 1RM as an average of all used formulas
calc.getOneRepMaxAverage(100, 8)

// Get the highest estimate of all used formula
calc.getOneRepMaxHigh(100, 8)

// Get the lowest estimate of all used formula
calc.getOneRepMaxLow(100, 8)

// Get all formulas results
calc.getOneRepMaxAll(100, 8)
```
