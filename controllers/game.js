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
const FindAllGames = async (req, res) => {
  try {
    let games = await Game.findAll()
    res.send(games)
  } catch (error) {
    throw error
  }
}

const FindAGame = async (req, res) => {
  try {
    let game = await Game.findByPk(req.params.gameId)
    res.send(game)
  } catch (error) {
    throw error
  }
}

const DeleteGame = async (req, res) => {
  try {
    let gameId = parseInt(req.params.gameId)
    await Game.destroy({ where: { id: gameId } })
    res.send({ message: `Deleted game with an id of ${gameId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateGame,
  FindAllGames,
  FindAGame,
  DeleteGame
}
