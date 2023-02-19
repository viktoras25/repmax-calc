export interface FormulaInterface {
  readonly name: string

  calcOneRepMax: (weight: number, reps: number) => number

  calcReps: (weight: number, fromReps: number, toReps: number) => number
}
