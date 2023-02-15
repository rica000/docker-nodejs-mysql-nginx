const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'fullcycle',
  password: 'fullcycle',
  database: 'fullcycle'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL Server!');
});

app.get('/', async function(req, res) {
    const name = req.query.name
    if (!name) throw new Error('Requisição sem nome!')
    connection.query(`INSERT INTO people (name) VALUES ('${req.query.name}');`)
    connection.query('SELECT name from people', function (error, results, fields) {
        if (error) throw error;
        res.json(results.map(obj => obj.name))
      });      
});

const port = process.env.USER_ID ?? 3000
app.listen(port, function() {
    console.log('Escutando na porta ' + port);
});