import { GraphQLObjectType, GraphQLString } from "graphql";
import { toolQuery } from "../schema/query/toolQuery";
import { userQuery } from "../schema/query/userQuery";
import { contributionQuery } from "../schema/query/contributionQuery";

export const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...userQuery,
    ...toolQuery,
    ...contributionQuery
  })
});
