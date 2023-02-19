import { AbstractFormula } from './AbstractFormula'

export class Lombardi extends AbstractFormula {
  readonly name = 'Lombardi'

  protected getRepsCoeff (reps: number): number {
    return Math.pow(reps, 0.1)
  }
}
