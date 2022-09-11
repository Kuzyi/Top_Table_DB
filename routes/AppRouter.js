const Router = require('express').Router()
const UserRouter = require('./user')
const GameRouter = require('./game')
// const locationRouter = require('./location')
// const commentRouter = require('./comment')
const authRouter = require('./auth')

Router.use('/user', UserRouter)
Router.use('/game', GameRouter)
// Router.use('/locations', locationRouter)
// Router.use('/comments', commentRouter)
Router.use('/auth', authRouter)

module.exports = Router
