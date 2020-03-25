import { GraphQLError } from "graphql";
import Modal from "../db/models/index";

const { User: UserModal, Tools } = Modal;
require("@babel/polyfill");

class UserResolver {
  static async login(args) {
    const userInfo = await UserModal.findOne({
      where: { email: args.email }
    });

    console.log(userInfo);
    const test = {
      firstName: "Emile",
      lastName: "Emile",
      email: "Emile",
      profile: "Emile",
      phone: "Emile",
      bio: "Emile",
      country: "Emile",
      city: "Emile",
      street: "Emile"
    };
    return test;
  }
}

export default UserResolver;
