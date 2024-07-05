const express = require('express');
const router = express.Router();
const cadastroUsuarioRepository = require('../repository/cadastroUsuario_repository');


router.get('usuario/:id', async (req, res) => {
    const idUsuario = req.params.idUsuario;

    try {
        const usuario = await cadastroUsuarioRepository.buscarUsuario(idUsuario);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(usuario);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro interno ao buscar usuário' });
    }
});


router.get('usuarios/', async (req, res) => {
    try {
        const usuarios = await cadastroUsuarioRepository.buscarUsuarios();

        if (!usuarios) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro interno ao buscar usuário' });
    }
});




router.post('/usuarios', (req, res) => {
    const usuario = req.body; // Supondo que o usuário seja enviado no corpo da requisição

    cadastroUsuarioRepository.inserirUsuario(usuario, (error, result) => {
        if (error) {
            console.error('Erro ao inserir usuário:', error);
            res.status(500).send('Erro ao inserir usuário');
        } else {
            res.status(200).json(result);
        }
    });
});




module.exports = router;