import { AbstractFormula } from './AbstractFormula'

export class Epley extends AbstractFormula {
  readonly name = 'Epley'

  protected getRepsCoeff (reps: number): number {
    return 1 + reps / 30
  }
}
