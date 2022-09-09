const { Game } = require('../models')

const CreateGame = async (req, res) => {
  try {
    const { gameName, gameImage } = req.body
    // let passwordDigest = await middleware.hashPassword(password)
    const game = await Game.create({ gameName, gameImage })
    res.send(game)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateGame
}
