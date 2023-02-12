import type Workout from "../models/workout";

export interface WorkoutRepository {
  create: (workout: Workout) => Promise<void>;
  findMany: () => Promise<Workout[]>;
}
