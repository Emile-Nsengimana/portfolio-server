import { GraphQLObjectType, GraphQLString } from "graphql";

export const USER = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    profile: { type: GraphQLString },
    phone: { type: GraphQLString },
    bio: { type: GraphQLString },
    country: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString }
  })
});

export const USERUPDATED = new GraphQLObjectType({
  name: "USERINFO",
  fields: () => ({
    message: { type: GraphQLString }
  })
});
