import { GraphQLError } from "graphql";
import Modal from "../db/models/index";

const { Contribution: contributionModal } = Modal;

class ContributionResolver {
  static async addContribution(args) {
    const contribution = await contributionModal.create(args);
    return contribution;
  }

  static async getContributions(args) {
    try {
      const contributions = await contributionModal.findAll();
      return contributions;
    } catch (error) {
      throw new GraphQLError("server error");
    }
  }

  static async removeContribution(args) {
    try {
      const contribution = await contributionModal.destroy({
        where: { id: args.id }
      });
      return contribution;
    } catch (error) {
      throw new GraphQLError("server error");
    }
  }

  static async editContribution(args) {
    const contribution = await contributionModal.findOne({
      where: { id: args.id }
    });
    if (!contribution) {
      throw new GraphQLError("contribution not found");
    }

    const updatedContribution = await contribution.update({
      title: args.title || tool.title,
      experience: args.experience || tool.experience,
      category: args.category || tool.category,
      logo: args.logo || tool.logo
    });
    return contribution;
  }
}

export default ContributionResolver;
