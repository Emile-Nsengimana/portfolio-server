import { GraphQLList } from "graphql";
import { CONTRIBUTION } from "../../types/contributionTypes";
import ContributionResolver from "../../resolvers/contributions";

export const contributionQuery = {
  Contributions: {
    type: GraphQLList(CONTRIBUTION),
        resolve(parent) {
          return ContributionResolver.getContributions();
        }
  }
};
