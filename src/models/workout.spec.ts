import { expect, test } from "vitest";
import Exercise from "./exercise";
import Workout from "./workout";

test("Create a Workout", () => {
  const user = "MyUser";
  const date = new Date();
  const exercises = [
    new Exercise("Exercise1", 5),
    new Exercise("Exercise2", 10),
  ];

  const workout = new Workout(user, date, exercises);

  expect(workout).toBeInstanceOf(Workout);
});

test("Cannot create a Workout with empty user", () => {
  const user = "";
  const date = new Date();
  const exercises = [
    new Exercise("Exercise1", 5),
    new Exercise("Exercise2", 10),
  ];

  expect(() => {
    return new Workout(user, date, exercises);
  }).toThrow("User cannot be an empty string.");
});

test("Cannot create a Workout with empty exercises", () => {
  const user = "MyUser";
  const date = new Date();
  const exercises: Exercise[] = [];

  expect(() => {
    return new Workout(user, date, exercises);
  }).toThrow("Exercises cannot be an empty array.");
});
