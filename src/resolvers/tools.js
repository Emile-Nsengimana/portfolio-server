import { GraphQLError } from "graphql";
import { Tools as toolsModal } from "../db/models/index";
import SequelizeDatabaseError from "sequelize";

class ToolsResolver {
  static async registerTool(args) {
    // try {
      const tool = await toolsModal.create(args);
      return tool;
    // } catch (SequelizeDatabaseError) {
    //   throw new GraphQLError("server error");
    // }
  }

  static async getTools(args) {
    try {
      const tools = await toolsModal.findAll();
      return tools;
    } catch (SequelizeDatabaseError) {
      throw new GraphQLError("server error");
    }
  }

  static async removeTool(args) {
    try {
      const tools = await toolsModal.destroy({ where: { id: args.id } });
      return tools;
    } catch (SequelizeDatabaseError) {
      throw new GraphQLError("server error");
    }
  }

  static async editTool(args) {
    const tool = await toolsModal.findOne({ where: { id: args.id } });
    if (!tool) {
      throw new GraphQLError("tool not found");
    }
    
    const updatedTool = await tool.update({
      title: args.title || tool.title,
      experience: args.experience || tool.experience,
      category: args.category || tool.category,
      logo: args.logo || tool.logo
    });
    return tool;
  }
}

export default ToolsResolver;
