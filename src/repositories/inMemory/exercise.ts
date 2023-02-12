import type Exercise from "../../models/exercise";
import type { ExerciseRepository } from "../exercise";

export class ExerciseInMemoryRepository implements ExerciseRepository {
  exercise: Exercise[];

  constructor() {
    this.exercise = [];
  }

  async findMany(): Promise<Exercise[]> {
    return this.exercise;
  }
}
