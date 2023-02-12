import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
  type Query {
    helloWorld: String!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello World!";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`Server listening at: ${url}`);
