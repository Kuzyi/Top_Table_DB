const Router = require('express').Router()
const controller = require('../controllers/user')

Router.get('/view', controller.getAllUsers)
Router.post('/', controller.createUser)
Router.put('/:userId', controller.updateUser)
Router.delete('/:userId', controller.deleteUser)

module.exports = Router
