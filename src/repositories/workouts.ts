import type Workout from "../models/workout";

export interface WorkoutsRepository {
  create: (workout: Workout) => Promise<void>;
}
