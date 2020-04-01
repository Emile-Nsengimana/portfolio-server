'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contribution = sequelize.define('Contribution', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  Contribution.associate = function(models) {
    // associations can be defined here
  };
  return Contribution;
};