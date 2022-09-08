'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.belongsTo(models.User, { foreignKey: 'creatorId' })
      Game.belongsTo(models.User, { foreignKey: 'playerId' })
    }
  }
  Game.init(
    {
      gameName: DataTypes.STRING,
      gameImage: DataTypes.STRING,
      creatorId: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      playerId: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Game',
      tableName: 'games'
    }
  )
  return Game
}
