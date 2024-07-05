// Conexão com banco de dados
const express = require('express');
const { message } = require('statuses');
const Pool = require('pg').Pool;



// JSON conexão ao banco
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'saveFood',
    user: 'postgres',
    password: 'postgress'   
});

const app = express();
app.use(express.json());


module.exports = {
     inserirUsuario: function (usuario, callback) {
        const values = [usuario.nome, usuario.email, usuario.senha];
        const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)';
        pool.query(query, values, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result.rows); // Retorna as linhas afetadas ou o resultado desejado
            }
        });
    }
};


module.exports = {
    buscarUsuario: async function(idUsuario) {
        try {
            const query = 'SELECT * FROM usuarios WHERE idUsuario = $1';
            const result = await pool.query(query, [idUsuario]);

            if (result.rows.length > 0) {
                const { idUsuario, nome, email, senha } = result.rows[0];
                return { idUsuario, nome, email, senha };
            } else {
                return null; // Retorna null se usuário não for encontrado
            }
        } catch (error) {
            throw error;
        }
    }
};


module.exports = {
    buscarUsuarios: async function() {
        try {
            const query = 'SELECT * FROM usuarios';
            const result = await pool.query(query);

            if (result.rows.length > 0) {
                const { idUsuario, nome, email, senha } = result.rows[0];
                return { idUsuario, nome, email, senha };
            } else {
                return null; // Retorna null se usuário não for encontrado
            }
        } catch (error) {
            throw error;
        }
    }
};











