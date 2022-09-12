const Router = require('express').Router()
const controller = require('../controllers/icon')

Router.post('/create', controller.CreateIcon)
Router.get('/:gameId', controller.FindIconsByGame)

// Router.delete(
//   '/:iconId',

//   controller.DeleteIcon
// )

module.exports = Router
