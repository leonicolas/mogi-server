module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define('Group', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    name : {
      type : DataTypes.STRING(255),
      allowNull : false,
      unique : true
    }
  }, {
    associate : function(models) {
      Group.hasMany(models.User);
    }
  });

  return Group;
};