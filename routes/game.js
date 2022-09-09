const Router = require('express').Router()
const controller = require('../controllers/game')

Router.post('/create', controller.CreateGame)

module.exports = Router
