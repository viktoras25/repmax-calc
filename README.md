# RepMax-calc

A library to estimate 1-Rep-Max using different formulas.

## Installation

```bash
npm install repmax-calc
```

### Usage

```javascript
import { RepCalculator } from 'repmax-calc'

const calc = new RepCalculator()

calc.getOneRepMaxAverage(80, 6)
calc.getOneRepMax(Formula.Brzycki, 100, 8)
```
