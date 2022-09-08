'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Icon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Icon.belongsTo(models.User, { foreignKey: 'creatorId' })
      Icon.belongsTo(models.User, { foreignKey: 'playerId' })
      Icon.belongsTo(models.Game, { foreignKey: 'gameId' })
    }
  }
  Icon.init(
    {
      iconName: DataTypes.STRING,
      iconImage: DataTypes.STRING,
      positionx: DataTypes.STRING,
      positiony: DataTypes.STRING,
      iconColor: DataTypes.STRING,
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
      },
      gameId: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'games',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Icon',
      tableName: 'icons'
    }
  )
  return Icon
}
