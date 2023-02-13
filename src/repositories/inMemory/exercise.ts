import type Exercise from "../../models/exercise";
import type { ExerciseRepository } from "../exercise";
import type { InMemory } from "./inMemory";

export class ExerciseInMemoryRepository implements ExerciseRepository {
  inMemory: InMemory;

  constructor(inMemory: InMemory) {
    this.inMemory = inMemory;
  }

  async findMany(): Promise<Exercise[]> {
    return this.inMemory.exercise;
  }
}
