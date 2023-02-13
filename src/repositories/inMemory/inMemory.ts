import type Exercise from "../../models/exercise";
import type Workout from "../../models/workout";

export class InMemory {
  workout: Workout[];
  exercise: Exercise[];

  constructor() {
    this.workout = [];
    this.exercise = [];
  }
}

const inMemory = new InMemory();

export default inMemory;
