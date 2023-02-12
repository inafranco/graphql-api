import type Exercise from "./exercise";

export default class Workout {
  user: string;
  date: Date;
  exercises: Exercise[];

  constructor(user: string, date: Date, exercises: Exercise[]) {
    if (user === "") {
      throw Error("User cannot be an empty string.");
    }

    if (exercises.length === 0) {
      throw Error("Exercises cannot be an empty array.");
    }
    this.user = user;
    this.date = date;
    this.exercises = exercises;
  }
}
