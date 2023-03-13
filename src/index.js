const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const server = express();

server.use(express.static(path.resolve('public')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'pokemon'
});

server.get('/api/pokemons', (req, res) => {
  db.query(
    'SELECT * FROM `pokemon`',
    (err, results, fields) => {
      res.status(200).json(results)
    }
  );
});

server.listen(3000, () => console.log('Connected'));