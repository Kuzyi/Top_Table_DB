const Router = require('express').Router()
const UserRouter = require('./user')
// const locationRouter = require('./location')
// const commentRouter = require('./comment')
const authRouter = require('./auth')

Router.use('/users', UserRouter)
// Router.use('/locations', locationRouter)
// Router.use('/comments', commentRouter)
Router.use('/auth', authRouter)

module.exports = Router
