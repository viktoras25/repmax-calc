import { AbstractFormula } from './AbstractFormula'

export class Wathen extends AbstractFormula {
  readonly name = 'Wathen'

  protected getRepsCoeff (reps: number): number {
    return 100 / (48.8 + 53.8 * Math.pow(Math.E, -0.075 * reps))
  }
}
