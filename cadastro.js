const express = require('express');
const cadastroController = require('../controllers/cadastro_controller');
//const cadastroEmailController = require('../controllers/email_sender_controller');

const rota = express.Router();

rota.post('/', cadastroController.inserir);
rota.get('/', cadastroController.busca);
router.post('/validate', cadastroController.validateProductByBarcode);
//rota.get('/cadastrar', cadastroEmailController.cadastrar)
rota.get('/confirmar/:hash_confirma', cadastroController.confirma);

module.exports = rota;

