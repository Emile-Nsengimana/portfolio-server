'use strict';
module.exports = (sequelize, DataTypes) => {
  const contribution = sequelize.define('contribution', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  contribution.associate = function(models) {
    // associations can be defined here
  };
  return contribution;
};