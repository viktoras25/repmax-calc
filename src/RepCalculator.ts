import { Formula } from './Formulas/Formula'
import { FormulaInterface } from './Formulas/FormulaInterface'
import { Brzycki } from './Formulas/Brzycki'
import { Lombardi } from './Formulas/Lombardi'
import { Wathen } from './Formulas/Wathen'
import { OConner } from './Formulas/OConner'
import { Adams } from './Formulas/Adams'
import { Epley } from './Formulas/Epley'
import { Landers } from './Formulas/Landers'

export class RepCalculator {
  formulas: { [key in Formula]: FormulaInterface } = {
    [Formula.Brzycki]: new Brzycki(),
    [Formula.Epley]: new Epley(),
    [Formula.Landers]: new Landers(),
    [Formula.Lombardi]: new Lombardi(),
    [Formula.Wathen]: new Wathen(),
    [Formula.OConner]: new OConner(),
    [Formula.Adams]: new Adams()
  }

  addFormula (formulaName: Formula, formula: FormulaInterface): void {
    this.formulas[formulaName] = formula
  }

  getFormula (formulaName: Formula): FormulaInterface {
    return this.formulas[formulaName]
  }

  getOneRepMax (formulaName: Formula, weight: number, reps: number): number {
    return this.getFormula(formulaName).calcOneRepMax(weight, reps)
  }

  getOneRepMaxAll (weight: number, reps: number): object {
    const result = {}

    for (const formula of Object.keys(this.formulas)) {
      result[formula] = this.formulas[formula].calcOneRepMax(weight, reps)
    }

    return result
  }

  getOneRepMaxAverage (weight: number, reps: number): number {
    const results = this.values(this.getOneRepMaxAll(weight, reps))

    return results.reduce((carry: number, number: number) => carry + number, 0) / results.length
  }

  getOneRepMaxLow (weight: number, reps: number): number {
    const results = this.values(this.getOneRepMaxAll(weight, reps))

    return results.reduce(this.min, 0)
  }

  getOneRepMaxHigh (weight: number, reps: number): number {
    const results = this.values(this.getOneRepMaxAll(weight, reps))

    return results.reduce(this.max, 0)
  }

  private values (o: object): any[] {
    return Object.keys(o).map((k: string) => o[k])
  }

  private min (min: number, current: number): number {
    if (min === 0) {
      return current
    }

    return min < current ? min : current
  }

  private max (max: number, current: number): number {
    if (max === 0) {
      return current
    }

    return max > current ? max : current
  }
}
