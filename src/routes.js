const { Router } = require('express')
const UserController = require('./app/controllers/UserController')
const Bloco0Controller = require('./app/controllers/Bloco0Controller')

const routes = Router()

routes.get('/', (req, res) => {
  res.status(200).json({
    msg: 'API Fix Auditoria 2019',
  })
})

routes.post('/user', UserController.store)
routes.get('/sped-test', Bloco0Controller.store)

module.exports = routes
