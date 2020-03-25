import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { USER } from "../types/user";
import UserResolver from "../resolvers/user";

export const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    CreateUser: {
      type: USER,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        profile: { type: GraphQLString },
        phone: { type: GraphQLString },
        bio: { type: GraphQLString },
        country: { type: GraphQLString },
        city: { type: GraphQLString },
        street: { type: GraphQLString }
      },
      resolve(args) {
        return UserResolver.login(args);
      }
    }
  })
});
