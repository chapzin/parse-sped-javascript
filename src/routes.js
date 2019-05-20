const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
  res.status(200).json({
    msg: 'API Fix Auditoria 2019',
  })
})

module.exports = routes
