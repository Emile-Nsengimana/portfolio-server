import { GraphQLSchema } from "graphql";
import { RootQuery } from "./query";
import { Mutation } from "./mutation";
var { buildSchema } = require("graphql");

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
