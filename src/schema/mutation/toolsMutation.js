import { GraphQLString, GraphQLID } from "graphql";
import { TOOL } from "../../types/toolsTypes";
import ToolsResolver from "../../resolvers/tools";

export const toolMutation = {
  RegisterTool: {
    type: TOOL,
    args: {
      title: { type: GraphQLString },
      experience: { type: GraphQLString },
      category: { type: GraphQLString },
      logo: { type: GraphQLString }
    },
    resolve(parent, args) {
      return ToolsResolver.registerTool(args);
    }
  },
  RemoveTool: {
    type: TOOL,
    args: {
      id: { type: GraphQLID }
    },
    resolve(parent, args) {
      return ToolsResolver.removeTool(args);
    }
  },

  EditTool: {
    type: TOOL,
    args: {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      experience: { type: GraphQLString },
      category: { type: GraphQLString },
      logo: { type: GraphQLString }
    },
    resolve(parent, args) {
      return ToolsResolver.editTool(args);
    }
  }
};
