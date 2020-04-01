import { GraphQLObjectType, GraphQLString } from "graphql";
import { USER } from "../types/userTypes";
import UserResolver from "../resolvers/user";
import { toolQuery } from "../schema/query/toolQuery";
import { userQuery } from "../schema/query/userQuery";

export const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...userQuery,
    ...toolQuery
  })
});
