import { GraphQLSchema } from "graphql";
import { RootQuery } from "./query";
import { Mutation } from "./mutation";

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
