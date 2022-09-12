const Router = require('express').Router()
const UserRouter = require('./user')
const GameRouter = require('./game')
// const locationRouter = require('./location')
// const commentRouter = require('./comment')
const authRouter = require('./auth')
const IconRouter = require('./icon')

Router.use('/user', UserRouter)
Router.use('/game', GameRouter)
// Router.use('/locations', locationRouter)
// Router.use('/comments', commentRouter)
Router.use('/auth', authRouter)
Router.use('/icon', IconRouter)

module.exports = Router
