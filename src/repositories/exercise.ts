import type Exercise from "../models/exercise";

export interface ExerciseRepository {
  findMany: () => Promise<Exercise[]>;
}
