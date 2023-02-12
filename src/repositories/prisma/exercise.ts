import type { PrismaClient } from "@prisma/client";
import type Exercise from "../../models/exercise";
import type { ExerciseRepository } from "../exercise";

export class ExercisePrismaRepository implements ExerciseRepository {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async findMany(): Promise<Exercise[]> {
    return await this.prisma.exercise.findMany();
  }
}
