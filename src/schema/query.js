import { GraphQLObjectType, GraphQLString } from "graphql";
import { USER } from "../types/user";
import UserResolver from "../resolvers/user";

export const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    Login: {
      type: USER,
      args: {
        email: { type: GraphQLString }
      },
      resolve(parent, args) {
        return UserResolver.login(args);
      }
    }
  })
});
