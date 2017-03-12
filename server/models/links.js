'use strict';
module.exports = function(sequelize, DataTypes) {
  let Links = sequelize.define('Links', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    users_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Links;
};