const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();

// Conectar com o MongoDB
db();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota teste
app.get('/', (req, res) => {
  res.send('API Tarefas funcionando!');
});

module.exports = app;
