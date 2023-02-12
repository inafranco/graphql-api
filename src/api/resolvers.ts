import Workout from "../models/workout";
import type Exercise from "../models/exercise";
import type { Context } from "./context";

interface ExerciseInput {
  name: string;
  value: number;
}

interface CreateWorkoutInput {
  user: string;
  date: string;
  exercises: ExerciseInput[];
}

export const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello World!";
    },
    workouts: async (_parent: Workout, _input: never, context: Context) => {
      return await context.workout.findMany();
    },
    exercises: async (_parent: Exercise, _input: never, context: Context) => {
      return await context.exercise.findMany();
    },
  },
  Mutation: {
    createWorkout: async (
      _parent: Workout,
      input: CreateWorkoutInput,
      context: Context
    ) => {
      const workout = new Workout(
        input.user,
        new Date(input.date),
        input.exercises
      );

      await context.workout.create(workout);

      return `Workout created successfully!`;
    },
  },
};
