import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createContext, closeContext } from "./context/context";
import type { Context } from "./context/context";
import Workout from "./models/workout";
import Exercise from "./models/exercise";

const typeDefs = `
  input ExerciseInput {
    name: String!
    value: Int!
  }

  type Workout {
    user: String!
    date: String!
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

interface ExerciseInput {
  name: string;
  value: number;
}
interface CreateWorkoutInput {
  user: string;
  date: string;
  exercises: ExerciseInput[];
}

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello World!";
    },
    workouts: () => {
      return [
        {
          user: "user1",
          date: new Date().toISOString(),
          exercises: [
            {
              name: "exercise1",
              value: 10,
            },
          ],
        },
      ];
    },
    exercises: () => {
      return [
        {
          name: "exercise13",
          value: 101,
        },
      ];
    },
  },
  Mutation: {
    createWorkout: async (
      _parent: Workout,
      input: CreateWorkoutInput,
      context: Context
    ) => {
      const exercises = input.exercises.map(({ name, value }) => {
        return new Exercise(name, value);
      });
      const workout = new Workout(input.user, new Date(input.date), exercises);

      const result = await context.prisma.workout.create({
        data: {
          user: workout.user,
          date: workout.date,
        },
      });
      console.log(result);
      return `Workout created: ${JSON.stringify(result)}`;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function runServer(server: ApolloServer<Context>): Promise<void> {
  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 3000 },
  });

  console.log(`Server listening at: ${url}`);
}

runServer(server)
  .then(async () => {
    await closeContext();
  })
  .catch(async (e) => {
    await closeContext();
    throw e;
  });
