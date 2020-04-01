import { GraphQLString, GraphQLID } from "graphql";
import { USER } from "../../types/userTypes";
import UserResolver from "../../resolvers/user";

export const userMutation = {
  UpdateUser: {
    type: USER,
    args: {
      userId: { type: GraphQLID },
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
};
