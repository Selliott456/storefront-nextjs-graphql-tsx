import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { buildSchema } from "type-graphql";

import { ProductsResolver } from "../../src/schema/products.resolver";

const schema = await buildSchema({
  resolvers: [ProductsResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();
const startServer = server.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});
