const express = require('express');
const loginController = require('../controllers/login_controller');


const rota = express.Router();

rota.post('/', loginController.inserir);
rota.get('/', loginController.busca);
//rota.get('/cadastrar', cadastroEmailController.cadastrar)
rota.get('/confirmar/:hash_confirma', loginController.confirma);

module.exports = rota;