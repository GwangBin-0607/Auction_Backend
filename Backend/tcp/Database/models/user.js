'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        models.User.hasMany(models.Product,{foreignKey:"user_id"});
        models.User.hasMany(models.User_Image,{foreignKey:"user_id"});
    }
  }
  User.init({
    user_id: {
        primaryKey:true,
        type:DataTypes.INTEGER
      },
    user_name:{
        type:DataTypes.STRING
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'User',
  });
  return User;
};