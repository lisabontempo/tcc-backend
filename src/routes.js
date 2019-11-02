const express = require('express');
const AtividadesController = require('./controllers/atividades');

const routes = express.Router();

routes.get('/listarAtividades', AtividadesController.index)
routes.post('/salvarAtividades', AtividadesController.store)

module.exports = routes;