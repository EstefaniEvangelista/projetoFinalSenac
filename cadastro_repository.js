const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
/*const jsbarcode = require('jsbarcode');*/
/*const pool = require('../config/database');*/
/*const cadastro = require('./rotas/cadastro');*/


const app = express();
const port = 3000;

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'saveFood',
    password: 'postgress',
    port: 5432,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*app.use('/api/cadastro', cadastro);*/


exports.getProductByBarcode = async (barcode) => {
    try {
        const query = 'SELECT * FROM produtos WHERE codigo_barras = $1';
        const { rows } = await pool.query(query, [barcode]);
        return rows[0];
    } catch (error) {
        throw error;
    }
    
};

app.post('/validate-product', (req, res) => {
    const { barcode } = req.body;

    // Lógica para validar o código de barras
    if (isValidBarcode(barcode)) {
        res.json({ message: 'Produto válido' });
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
});

// Função para validar o código de barras
function isValidBarcode(barcode) {
    // Aqui pode implementar a lógica para validar o código de barras no banco de dados
    // Exemplo: consultando o banco de dados para verificar se o produto existe
    return true; // Temporário
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});










