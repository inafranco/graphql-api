import type Workout from "../models/workout";
import type { Context } from "./context";

export const resolvers = {
  Query: {
    workouts: async (_parent: undefined, input: object, context: Context) => {
      return await context.workout.findMany();
    },
    exercises: async (_parent: undefined, _input: object, context: Context) => {
      return await context.exercise.findMany();
    },
  },
  Mutation: {
    createWorkout: async (
      _parent: undefined,
      input: Workout,
      context: Context
    ) => {
      await context.workout.create(input);

      return "Workout created successfully!";
    },
  },
};
