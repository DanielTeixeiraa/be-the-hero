const express = require('express')
const crypto = require('crypto')
const connection = require('./database/connection')

const ongsController = require('./controllers/ongs_controller')
const incidentsController = require('./controllers/incidents_controller')
const profileController = require('./controllers/profile_controller')
const sessionController = require('./controllers/session_controller')

const routes = express.Router();

routes.get('/ongs', ongsController.index)
routes.get("/incidents",incidentsController.index )

routes.get("/profiles", profileController.index);

routes.post('/ongs', ongsController.create)
routes.post('/incidents', incidentsController.create)
routes.post('/sessions', sessionController.create)

routes.delete('/incidents/:id', incidentsController.delete)

module.exports = routes;