import { describe, it, expect } from "vitest";
import Workout from "../models/workout";
import Exercise from "../models/exercise";
import { resolvers } from "./resolvers";
import { createInMemoryContext } from "./context";

describe("Workouts query", () => {
  it("should return all workouts with exercises", async () => {
    const context = createInMemoryContext();

    const user = "testUser";
    const date = new Date();
    const exercises = [
      {
        name: "testName",
        value: 10,
      },
    ];

    const workout = new Workout(user, date, exercises);
    await context.workout.create(workout);

    const result = await resolvers.Query.workouts(undefined, {}, context);
    expect(result).toStrictEqual([workout]);
  });
});

describe("Exercise query", () => {
  it("should return all workouts with exercises", async () => {
    const context = createInMemoryContext();

    const name = "testName";
    const value = 10;
    const exercise = new Exercise(name, value);

    const user = "testUser";
    const date = new Date();
    const exercises = [
      {
        name,
        value,
      },
    ];
    const workout = new Workout(user, date, exercises);
    await context.workout.create(workout);

    const result = await resolvers.Query.exercises(undefined, {}, context);
    expect(result).toStrictEqual([exercise]);
  });
});

describe("createWorkout mutation", () => {
  it("should create workout on repository with all inner exercises", async () => {
    const context = createInMemoryContext();

    const user = "testUser";
    const date = new Date();
    const exercises = [
      {
        name: "testName",
        value: 10,
      },
    ];
    const workout = new Workout(user, date, exercises);

    const result = await resolvers.Mutation.createWorkout(
      undefined,
      workout,
      context
    );
    expect(result).toStrictEqual("Workout created successfully!");

    const repoWorkouts = await context.workout.findMany();
    expect(repoWorkouts).toStrictEqual([workout]);
  });
});
