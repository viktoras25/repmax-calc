import { AbstractFormula } from './AbstractFormula'

export class OConner extends AbstractFormula {
  readonly name = "O'Conner et al"

  protected getRepsCoeff (reps: number): number {
    return 1 + 0.025 * reps
  }
}
