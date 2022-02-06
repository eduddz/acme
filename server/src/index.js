require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./database/connection')
const app = express();
const port = process.env.PORT_SERVER || 8080;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/pacientes', async (req, res) => {
    const sql = `SELECT * FROM pacientes`;
    await connection.query(sql, (err, result) =>  {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/pacientes/registrar', async (req, res) => {
    const nome = req.body.nome;
    const data_de_nascimento = req.body.data_de_nascimento;
    const cpf = req.body.cpf;
    const sexo = req.body.sexo;
    const endereco = req.body.endereco;
    const status = req.body.status
    const sql_verificar = "SELECT * FROM pacientes WHERE cpf = ?";
    await connection.query(sql_verificar, [cpf], (err, result) =>  {
        if (err) console.log(err);
        if(result.length === 0) {
            const sql_inserir = `INSERT INTO pacientes (nome, data_de_nascimento, cpf, sexo, endereco, status) VALUES (?, ?, ?, ?, ?, ?)`
            connection.query(sql_inserir, [nome, data_de_nascimento, cpf, sexo, endereco, status], (err, result) => {
                if (err) console.log(err);
                console.log('Usuário cadastrado com sucesso');
                res.send(result);
            });
        } else console.log('Usuário já está cadastrado');
    });
});

app.put('/pacientes/alterar/:cpf', async (req, res) => {
    const nome = req.body.nome;
    const data_de_nascimento = req.body.data_de_nascimento;
    const cpf = req.params.cpf;
    const sexo = req.body.sexo;
    const endereco = req.body.endereco;
    const status = req.body.status;
    const sql_verificar = `SELECT * FROM pacientes WHERE cpf = ?`;
    await connection.query(sql_verificar, [cpf], (err, result) => {
        if (err) console.log(err);
        if(result.length === 1) {
            const sql_inserir = `UPDATE pacientes SET nome = ?, data_de_nascimento = ?, sexo = ?, endereco = ?, status = ? WHERE cpf = ?`;
            connection.query(sql_inserir, [nome, data_de_nascimento, sexo, endereco, status, cpf], (err, result) => {
                if (err) console.log(err);
                console.log('Usuário alterado com sucesso');
                res.send(result);
            });
        } else console.log('Usuário não pode ser alterado');
        });
    });

    app.get('/create-table', () => {
        console.log('Criando a tabela');
        try {
            connection.query('CREATE TABLE IF NOT EXISTS `banco`.`pacientes` (`idusuarios` INT NOT NULL AUTO_INCREMENT, `nome` VARCHAR(45) NOT NULL, `data_de_nascimento` DATE NOT NULL, `cpf` VARCHAR(11) NOT NULL, `sexo` VARCHAR(10) NOT NULL, `endereco` VARCHAR(70) NULL, `status` VARCHAR(10) NOT NULL, PRIMARY KEY (`idusuarios`));');
        } catch (err) { console.log('Erro: ' + err) }
        console.log('Pronto!');
})

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
    connection.connect((err) => {
        if (err) throw err
        console.log('Banco de dados está conectado');
    })
})