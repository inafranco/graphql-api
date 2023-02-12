import { expect, test } from "vitest";
import Exercise from "./exercise";

test("Create an exercise", () => {
  const name = "MyExercise";
  const value = 10;

  const exercise = new Exercise(name, value);

  expect(exercise).toBeInstanceOf(Exercise);
});

test("Cannot create an exercise without name", () => {
  const name = "";
  const value = 10;

  expect(() => {
    return new Exercise(name, value);
  }).toThrow("Name cannot be an empty string.");
});

test("Cannot create an exercise with negative value", () => {
  const name = "MyExercise";
  const value = -2;

  expect(() => {
    return new Exercise(name, value);
  }).toThrow("Value cannot be a negative number.");
});
