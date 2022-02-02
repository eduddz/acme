const express = require('express');
const cors = require('cors');
const db = require('../server/db')
require('dotenv/config')
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/pacientes', async (req, res) => {
    const sql = `SELECT * FROM pacientes`;
    await db.query(sql, (err, result) =>  {
        if (err) throw err;
        res.send(result)
    })
})

app.post('/pacientes/registrar', async (req, res) => {
    const nome = req.body.nome;
    const data_de_nascimento = req.body.data_de_nascimento;
    const cpf = req.body.cpf;
    const sexo = req.body.sexo;
    const endereco = req.body.endereco;
    const status = req.body.status
    const sql = "SELECT * FROM pacientes WHERE cpf = ?";
    await db.query(sql, [cpf], (err, result) =>  {
        if (err) res.send(err);

        if(result.length === 0) {
            db.query(
                `
                INSERT INTO pacientes (nome, data_de_nascimento, cpf, sexo, endereco, status) VALUES (?, ?, ?, ?, ?, ?)`, 
                [nome, data_de_nascimento, cpf, sexo, endereco, status], 
                (err, result) => {
                if (err) res.send(err)
                
                res.send({ msg: 'cadastrado com sucesso' })
            });
        } else {
            res.send({ msg: 'usuário já cadastrado' });   
        }
    });
});

app.put('/pacientes/alterar/:id_pacientes', async (req, res) => {
    const id_pacientes = req.params.id_pacientes
    const nome = req.body.nome;
    const data_de_nascimento = req.body.data_de_nascimento;
    const cpf = req.body.cpf;
    const sexo = req.body.sexo;
    const endereco = req.body.endereco;
    const status = req.body.status
    await db.query(
                `UPDATE pacientes SET nome = ?, data_de_nascimento = ?, cpf= ?, sexo = ?, endereco = ?, status = ? WHERE id_pacientes = ?`, 
        [nome, data_de_nascimento, cpf, sexo, endereco, status, id_pacientes], 
        (err) => {
            if (err) res.send(err)
            res.send({ msg: 'alterado com sucesso' })
        });
    });

app.listen(3001, () => {
    console.log('servidor funcionando')
    db.connect((err) => {
        if (err) throw err
        console.log('database connected')
    })
});