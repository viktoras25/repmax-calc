import { AbstractFormula } from './AbstractFormula'

export class Landers extends AbstractFormula {
  readonly name = "Lander's"

  protected getRepsCoeff (reps: number): number {
    return 100 / (101.3 - 2.67123 * reps)
  }
}
