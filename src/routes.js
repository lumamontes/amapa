const express = require('express')

const FraseController = require('./controllers/FraseController');

const routes = express.Router()

routes.get('/frases', FraseController.index);
routes.post('/frases', FraseController.store);

module.exports = routes;