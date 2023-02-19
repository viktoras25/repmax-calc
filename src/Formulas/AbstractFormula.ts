import { FormulaInterface } from './FormulaInterface'

export abstract class AbstractFormula implements FormulaInterface {
  readonly name: string

  protected abstract getRepsCoeff (reps: number): number

  public calcOneRepMax (weight: number, reps: number): number {
    return weight * this.getRepsCoeff(reps)
  }

  public calcReps (weight: number, fromReps: number, toReps: number): number {
    return this.calcOneRepMax(weight, fromReps) / this.getRepsCoeff(toReps)
  }
}
