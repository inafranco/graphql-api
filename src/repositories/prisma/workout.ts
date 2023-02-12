import type { PrismaClient } from "@prisma/client";
import type Workout from "../../models/workout";
import type { WorkoutRepository } from "../workout";

export class WorkoutPrismaRepository implements WorkoutRepository {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create({ user, date, exercises }: Workout): Promise<void> {
    await this.prisma.workout.create({
      data: {
        user,
        date,
        exercises: {
          create: exercises,
        },
      },
    });
  }

  async findMany(): Promise<Workout[]> {
    return await this.prisma.workout.findMany({
      include: {
        exercises: true,
      },
    });
  }
}
