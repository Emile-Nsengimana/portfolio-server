import { GraphQLError } from "graphql";
import Modal from "../db/models/index";
import bcrypt from "bcrypt";

const { User: UserModal } = Modal;

class UserResolver {
  static async login(args) {
    const userInfo = await UserModal.findOne({
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
    const userInfo = await UserModal.findOne({
      where: { id: args.id }
    });

    if (!userInfo) {
      throw new GraphQLError("user not found");
    }

    return userInfo;
  }

  static async editUserInfo(args) {
    const user = await UserModal.findOne({
      where: { email: args.email }
    });

    if (!user) {
      throw new GraphQLError("user not found");
    }

    const newUserInfo = await UserModal.update(
      {
        firstName: args.firstName || user.firstName,
        lastName: args.lastName || user.lastName,
        email: args.email || user.email,
        profile: args.profile || user.profile,
        phone: args.phone || user.phone,
        bio: args.bio || user.bio,
        country: args.country || user.country,
        city: args.city || user.city,
        street: args.city || user.street
      },
      { where: { email: args.email } }
    );

    if (newUserInfo[0] !== 1) {
      throw new GraphQLError("unknown error, please try again");
    }

    return { message: "user updated successful" };
  }
}

export default UserResolver;
