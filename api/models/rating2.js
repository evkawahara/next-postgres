'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rating2 = sequelize.define('Rating2', {
    ratingBlob: DataTypes.STRING
  }, {});
  Rating2.associate = function(models) {
    // associations can be defined here
  };
  return Rating2;
};