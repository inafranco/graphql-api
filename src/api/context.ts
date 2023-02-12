import prisma from "../repositories/prisma/prisma";
import { WorkoutPrismaRepository } from "../repositories/prisma/workout";
import { ExercisePrismaRepository } from "../repositories/prisma/exercise";
import type { WorkoutRepository } from "../repositories/workout";
import type { ExerciseRepository } from "../repositories/exercise";

export interface Context {
  workout: WorkoutRepository;
  exercise: ExerciseRepository;
}

export async function createContext(): Promise<Context> {
  return {
    workout: new WorkoutPrismaRepository(prisma),
    exercise: new ExercisePrismaRepository(prisma),
  };
}

export async function closeContext(): Promise<void> {
  await prisma.$disconnect();
}
