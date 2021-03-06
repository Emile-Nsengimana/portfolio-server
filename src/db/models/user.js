"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      bio: DataTypes.STRING,
      password: DataTypes.STRING,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      streetNo: DataTypes.STRING,
      profile: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
