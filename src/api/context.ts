import type { WorkoutRepository } from "../repositories/workout";
import type { ExerciseRepository } from "../repositories/exercise";

import prisma from "../repositories/prisma/prisma";
import { WorkoutPrismaRepository } from "../repositories/prisma/workout";
import { ExercisePrismaRepository } from "../repositories/prisma/exercise";

import { InMemory } from "../repositories/inMemory/inMemory";
import { ExerciseInMemoryRepository } from "../repositories/inMemory/exercise";
import { WorkoutInMemoryRepository } from "../repositories/inMemory/workout";

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

export function createInMemoryContext(): Context {
  const inMemory = new InMemory();
  return {
    workout: new WorkoutInMemoryRepository(inMemory),
    exercise: new ExerciseInMemoryRepository(inMemory),
  };
}
