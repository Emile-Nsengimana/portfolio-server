import { GraphQLID, GraphQLList } from "graphql";
import { TOOL } from "../../types/toolsTypes";
import ToolsResolver from "../../resolvers/tools";

export const toolQuery = {
  Tools: {
    type: GraphQLList(TOOL),
    resolve(parent) {
      return ToolsResolver.getTools();
    }
  }
};
