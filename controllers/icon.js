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
const FindAllIcon = async (req, res) => {
  try {
    let icons = await Icon.findAll()
    res.send(icons)
  } catch (error) {
    throw error
  }
}

// const FindAGame = async (req, res) => {
//   try {
//     let game = await Game.findByPk(req.params.gameId)
//     res.send(game)
//   } catch (error) {
//     throw error
//   }
// }

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
  FindAllIcon
  // FindAGame,
  // DeleteIcon
}
