const Router = require('express').Router()
const controller = require('../controllers/icon')

Router.post('/create', controller.CreateIcon)
Router.get('/view', controller.FindAllIcon)
// Router.get('/:gameId', controller.FindAGame)

// Router.delete(
//   '/:iconId',

//   controller.DeleteIcon
// )

module.exports = Router
