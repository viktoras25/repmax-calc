import { assert } from 'chai'
import { it } from 'mocha'
import { RepCalculator } from '../src/RepCalculator'
import { Formula } from '../src/Formulas/Formula'

const calc = new RepCalculator

it('Adams one rep max', () => {
  assert.closeTo(calc.getOneRepMax(Formula.Adams, 100, 5), 111.111, 0.001)
})

it('Brzycki one rep max', () => {
  assert.closeTo(calc.getOneRepMax(Formula.Brzycki, 100, 5), 112.5, 0.001)
})

it('Epley one rep max', () => {
  assert.closeTo(calc.getOneRepMax(Formula.Epley, 100, 5), 116.666, 0.001)
})

it('Landers one rep max', () => {
  assert.closeTo(calc.getOneRepMax(Formula.Landers, 100, 5), 113.708, 0.001)
})

it('Lombardi one rep max', () => {
  assert.closeTo(calc.getOneRepMax(Formula.Lombardi, 100, 5), 117.461, 0.001)
})

it('O\'Conner one rep max', () => {
  assert.closeTo(calc.getOneRepMax(Formula.OConner, 100, 5), 112.5, 0.001)
})

it('Wathen one rep max', () => {
  assert.closeTo(calc.getOneRepMax(Formula.Wathen, 100, 5), 116.583, 0.001)
})

it('Calculator average', () => {
  assert.closeTo(calc.getOneRepMaxAverage(100, 5), 114.361, 0.001)
})

it('Calculator high', () => {
  assert.closeTo(calc.getOneRepMaxHigh(100, 5), 117.461, 0.001)
})

it('Calculator low', () => {
  assert.closeTo(calc.getOneRepMaxLow(100, 5), 111.111, 0.001)
})
