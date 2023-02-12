import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createContext, closeContext } from "./api/context";
import type { Context } from "./api/context";
import { typeDefs } from "./api/definitions";
import { resolvers } from "./api/resolvers";

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
