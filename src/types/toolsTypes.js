import { GraphQLObjectType, GraphQLString } from "graphql";

export const TOOL = new GraphQLObjectType({
  name: "Tool",
  fields: () => ({
    title: { type: GraphQLString },
    experience: { type: GraphQLString },
    category: { type: GraphQLString },
    logo: { type: GraphQLString }
  })
});
