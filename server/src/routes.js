const express = require('express')
const crypto = require('crypto')
const connection = require('./database/connection')

const ongsController = require('./controllers/ongs_controller')
const incidentsController = require('./controllers/incidents_controller')

const routes = express.Router();

routes.get('/ongs', ongsController.index)
routes.get("/incidents",incidentsController.index )

routes.post('/ongs', ongsController.create)
routes.post('/incidents', incidentsController.create)

module.exports = routes;