const express = require('express')
const route = express.Router()
const countersController = require('../app/controller/countersController')

route.get('/api/counters',countersController.list)
route.post('/api/counters',countersController.create)
route.put('/api/counters/:id',countersController.update)
route.delete('/api/counters/:id',countersController.destroy)

module.exports = route