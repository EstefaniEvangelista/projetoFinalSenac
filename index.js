const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json()); // Tratar o bory do request como JSON
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



const cadastroUsuarioRouter = require('./rotas/cadastroUsuario');
app.use('/usuario', cadastroUsuarioRouter);





app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

