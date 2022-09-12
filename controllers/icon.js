const { Icon } = require('../models')

const CreateIcon = async (req, res) => {
  try {
    const { iconName, iconImage, gameId, positionx, positiony } = req.body
    // let passwordDigest = await middleware.hashPassword(password)
    const icon = await Icon.create({
      iconName,
      iconImage,
      positionx,
      positiony,
      gameId
    })
    res.send(icon)
  } catch (error) {
    throw error
  }
}
const FindIconsByGame = async (req, res) => {
  try {
    let gameId = parseInt(req.params.gameId)
    let icons = await Icon.findAll({
      where: { gameId: gameId }
      // include: [{ model: User }]z
    })
    res.send(icons)
  } catch (error) {
    throw error
  }
}

// const DeleteIcon = async (req, res) => {
//   try {
//     let iconId = parseInt(req.params.gameId)
//     await Game.destroy({ where: { id: gameId } })
//     res.send({ message: `Deleted game with an id of ${gameId}` })
//   } catch (error) {
//     throw error
//   }
// }

// dont grab this from params for deleting icon

module.exports = {
  CreateIcon,
  FindIconsByGame
  // FindAGame,
  // DeleteIcon
}
