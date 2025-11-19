const express = require('express');
const cors = require('cors');
const acessaBancoNoServidor = require('./acessaBancoNoServidor');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Cadastrar uma nova mídia
app.post('/midias', (req, res) => {
    const { titulo, genero, classificacao, data_lancamento } = req.body;

    const sql = `
        INSERT INTO midias 
        (titulo, genero, classificacao, data_lancamento)
        VALUES (?, ?, ?, ?)
    `;

    acessaBancoNoServidor.query(sql, [titulo, genero, classificacao, data_lancamento], (err, results) => {
        if (err) {
            console.error("Erro ao cadastrar mídia:", err);
            return res.status(500).json({ error: "Erro ao cadastrar mídia." });
        }
        res.json({ message: "Mídia cadastrada com sucesso!" });
    });
});

// Listar todas as mídias
app.get('/midias', (req, res) => {
    const sql = 'SELECT * FROM midias';

    acessaBancoNoServidor.query(sql, (err, results) => {
        if (err) {
            console.error("Erro ao buscar mídias:", err);
            return res.status(500).json({ error: "Erro ao buscar mídias." });
        }
        res.json(results);
    });
});

// Atualizar uma mídia existente
app.put('/midias/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, genero, classificacao, data_lancamento } = req.body;

    const sql = `
        UPDATE midias
        SET titulo=?, genero=?, classificacao=?, data_lancamento=?
        WHERE ID=?
    `;

    acessaBancoNoServidor.query(sql, [titulo, genero, classificacao, data_lancamento, id], (err, results) => {
        if (err) {
            console.error("Erro ao atualizar mídia:", err);
            return res.status(500).json({ error: "Erro ao atualizar mídia." });
        }
        res.json({ message: "Mídia atualizada com sucesso!" });
    });
});

// Deletar uma mídia
app.delete('/midias/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM midias WHERE ID=?';

    acessaBancoNoServidor.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Erro ao deletar mídia:", err);
            return res.status(500).json({ error: "Erro ao deletar mídia." });
        }
        res.json({ message: "Mídia deletada com sucesso!" });
    });
});

app.listen(3000, () => {
    console.log('Servidor de Filmes e Séries rodando em http://localhost:3000');
});
