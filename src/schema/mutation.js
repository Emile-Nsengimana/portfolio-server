import { GraphQLObjectType } from "graphql";
import { userMutation } from "../schema/mutation/userMutation";
import { toolMutation } from "../schema/mutation/toolsMutation";

export const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...userMutation,
    ...toolMutation
  })
});
