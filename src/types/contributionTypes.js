import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

export const CONTRIBUTION = new GraphQLObjectType({
  name: "Contribution",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    url: { type: GraphQLString },
    year: { type: GraphQLInt }
  })
});
