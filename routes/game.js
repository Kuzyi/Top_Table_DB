const Router = require('express').Router()
const controller = require('../controllers/game')
const middleware = require('../middleware')

Router.post('/create', controller.CreateGame)
Router.get('/view', controller.FindAllGames)
Router.get('/:gameId', controller.FindAGame)

Router.delete(
  '/:gameId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteGame
)

module.exports = Router
