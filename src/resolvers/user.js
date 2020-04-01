import { GraphQLError } from "graphql";
import Modal from "../db/models/index";
import bcrypt from "bcrypt";

const { User: userModal } = Modal;

class UserResolver {
  static async login(args) {
    const userInfo = await userModal.findOne({
      where: { email: args.email }
    });

    if (!userInfo) {
      throw new GraphQLError("user not found, please check your email address");
    }
    const comparePassword = bcrypt.compareSync(
      args.password,
      userInfo.password
    );
    if (!comparePassword) {
      throw new GraphQLError("incorrect password");
    }

    return userInfo;
  }

  static async getUserInfo(args) {
    const userInfo = await userModal.findOne({
      where: { id: args.id }
    });

    if (!userInfo) {
      throw new GraphQLError("user not found");
    }

    return userInfo;
  }

  static async editUserInfo(args) {
    const user = await userModal.findOne({
      where: { id: args.userId }
    });

    if (!user) {
      throw new GraphQLError("user not found");
    }

    const updatedUser = await user.update({
      firstName: args.firstName || user.firstName,
      lastName: args.lastName || user.lastName,
      email: args.email || user.email,
      profile: args.profile || user.profile,
      phone: args.phone || user.phone,
      bio: args.bio || user.bio,
      country: args.country || user.country,
      city: args.city || user.city,
      street: args.city || user.street
    });

    if (!updatedUser) {
      throw new GraphQLError("server error, please try again");
    }
    return updatedUser;
  }
}

export default UserResolver;
