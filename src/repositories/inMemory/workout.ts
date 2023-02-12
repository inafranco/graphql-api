import type Workout from "../../models/workout";
import type { WorkoutRepository } from "../workout";

export class WorkoutInMemoryRepository implements WorkoutRepository {
  workouts: Workout[];

  constructor() {
    this.workouts = [];
  }

  async create(workout: Workout): Promise<void> {
    this.workouts.push(workout);
  }

  async findMany(): Promise<Workout[]> {
    return this.workouts;
  }
}
