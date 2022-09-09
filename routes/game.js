const Router = require('express').Router()
const controller = require('../controllers/game')

Router.post('/create', controller.CreateGame)
Router.get('/view', controller.FindAllGames)

module.exports = Router
