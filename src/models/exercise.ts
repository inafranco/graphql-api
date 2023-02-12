export default class Exercise {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    if (name === "") {
      throw Error("Name cannot be an empty string.");
    }

    if (value < 0) {
      throw Error("Value cannot be a negative number.");
    }

    this.name = name;
    this.value = value;
  }
}
