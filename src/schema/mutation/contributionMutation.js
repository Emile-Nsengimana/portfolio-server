import { GraphQLString, GraphQLInt } from "graphql";
import ContributionResolver from "../../resolvers/contributions";
import { CONTRIBUTION } from "../../types/contributionTypes";

export const contributionMutation = {
  AddContribution: {
    type: CONTRIBUTION,
    args: {
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      image: { type: GraphQLString },
      url: { type: GraphQLString },
      year: { type: GraphQLInt }
    },
    resolve(parent, args) {
      return ContributionResolver.addContribution(args);
    }
  }
};
