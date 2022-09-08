'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Game, { foreignKey: 'playerId' })
      User.hasMany(models.Game, { foreignKey: 'creatorId' }) //this might cause issues
      User.hasMany(models.Icon, { foreignKey: 'playerId' })
      User.hasMany(models.Icon, { foreignKey: 'creatorId' }) //this might cause issues
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
