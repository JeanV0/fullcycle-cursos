const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'people'
});

app.get('/cadastrar/:nome', (req, res) => {
  const { nome } = req.params;
  const insertQuery = `
    INSERT INTO people (name) VALUES ('${nome}')
  `;
  
  connection.query(insertQuery, (error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.send('<h1>Full Cycle Rocks!</h1>');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});