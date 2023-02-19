import { AbstractFormula } from './AbstractFormula'

export class Adams extends AbstractFormula {
  readonly name = 'Adams'

  protected getRepsCoeff (reps: number): number {
    return 1 / (1 - 0.02 * reps)
  }
}
