import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { USER, USERUPDATED } from "../types/user";
import UserResolver from "../resolvers/user";

export const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    UpdateUser: {
      type: USERUPDATED,
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
      resolve(parent, args) {
        return UserResolver.editUserInfo(args);
      }
    }
  })
});
