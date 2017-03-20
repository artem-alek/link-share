'use strict';
module.exports = function(sequelize, DataTypes) {
  let Comments = sequelize.define('Comments', {
    comment: DataTypes.TEXT,
    users_id: DataTypes.INTEGER,
    link_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comments;
};