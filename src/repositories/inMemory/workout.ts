import Exercise from "../../models/exercise";
import type Workout from "../../models/workout";
import type { WorkoutRepository } from "../workout";
import type { InMemory } from "./inMemory";

export class WorkoutInMemoryRepository implements WorkoutRepository {
  inMemory: InMemory;

  constructor(inMemory: InMemory) {
    this.inMemory = inMemory;
  }

  async create(workout: Workout): Promise<void> {
    this.inMemory.workout.push(workout);
    workout.exercises.forEach(({ name, value }) => {
      const exercise = new Exercise(name, value);
      this.inMemory.exercise.push(exercise);
    });
  }

  async findMany(): Promise<Workout[]> {
    return this.inMemory.workout;
  }
}
