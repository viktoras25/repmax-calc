import { AbstractFormula } from './AbstractFormula'

export class Brzycki extends AbstractFormula {
  readonly name = 'Brzycki'

  protected getRepsCoeff (reps: number): number {
    return 36 / (37 - reps)
  }
}
