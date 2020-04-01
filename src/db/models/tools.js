"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tools = sequelize.define(
    "Tools",
    {
      title: DataTypes.STRING,
      experience: DataTypes.STRING,
      category: DataTypes.STRING,
      logo: DataTypes.STRING
    },
    {}
  );
  Tools.associate = function(models) {
    // associations can be defined here
  };
  return Tools;
};
