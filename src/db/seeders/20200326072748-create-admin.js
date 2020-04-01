import moment from "moment";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1199680023229045,
          firstName: "Emile",
          lastName: "Nsengimana",
          email: process.env.EMAIL,
          profile: "/localhost/img/profile.png",
          phone: "0782057791",
          bio: "Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",
          country: "Rwanda",
          city: "Kigali",
          streetNo: "KK 270",
          password: bcrypt.hashSync(process.env.PASSWORD, 8),
          createdAt: moment.utc().format(),
          updatedAt: moment.utc().format()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
