const express = require('express')
const crypto = require('crypto')
const connection = require('./database/connection')

const ongsController = require('./controllers/ongs_controller')
const routes = express.Router();

routes.get('/ongs', ongsController.index)

routes.post('/ongs', ongsController.create)

module.exports = routes;