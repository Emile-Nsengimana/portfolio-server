import { GraphQLString } from "graphql";
import UserResolver from "../../resolvers/user";
import { USER } from "../../types/userTypes";

export const userQuery = {
  Login: {
    type: USER,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(parent, args) {
      return UserResolver.login(args);
    }
  },

  GetUser: {
    type: USER,
    args: {
      id: { type: GraphQLString }
    },
    resolve(parent, args) {
      return UserResolver.getUserInfo(args);
    }
  }
};
