export const typeDefs = `
  scalar DateTime

  input ExerciseInput {
    name: String!
    value: Int!
  }

  type Workout {
    user: String!
    date: DateTime!
    exercises: [Exercise!]!
  }

  type Exercise {
    name: String!
    value: Int!
  }

  type Query {
    helloWorld: String!
    workouts: [Workout]!
    exercises: [Exercise]!
  }

  type Mutation {
    createWorkout(
      user: String!
      date: String!
      exercises: [ExerciseInput!]!
    ): String!
  }
`;
