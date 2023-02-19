export namespace RepMaxCalculator {
    interface RepMaxCalculator {
        name: string;

        calcOneRepMax(weight: number, reps: number): number;
    }

    export class BrzyckiCalculator implements RepMaxCalculator {
        name: "Brzycki Formula";

        calcOneRepMax(weight: number, reps: number): number {
            return weight * (36 / (37 - reps))
        }
    }

    export class EpleyCalculator implements RepMaxCalculator {
        name: "Epley Formula";

        calcOneRepMax(weight: number, reps: number): number {
            return weight * (1 + reps / 30)
        }
    }

    export class LandersCalculator implements RepMaxCalculator {
        name: "Lander's Formula";

        calcOneRepMax(weight: number, reps: number): number {
            return 100 * (weight / 101.3 - 2.67123 * reps)
        }
    }

    export class MayhewCalculator implements RepMaxCalculator {
        name: "Mayhew et al. Max";

        calcOneRepMax(weight: number, reps: number): number {
            return 100 * weight / (52.2 + 41.9 * Math.pow(Math.E, -0.055 * reps))
        }
    }

    export class LombardiCalculator implements RepMaxCalculator {
        name: "Lombardi Formula";

        calcOneRepMax(weight: number, reps: number): number {
            return weight * Math.pow(reps, 0.1)
        }
    }

    export class WathenCalculator implements RepMaxCalculator {
        name: "Lombardi Formula";

        calcOneRepMax(weight: number, reps: number): number {
            return 100 * weight / (48.8 + 53.8 * Math.pow(Math.E, -0.075 * reps))
        }
    }

    export class OConnorCalculator implements RepMaxCalculator {
        name: "O'Connor et al";

        calcOneRepMax(weight: number, reps: number): number {
            return weight * (1 + 0.025 * reps)
        }
    }
}