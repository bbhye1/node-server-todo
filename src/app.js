const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const todoService = require('./application/todoServise');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/todo', (req, res) => {
  const { todoList } = todoService;
  res.send(todoList);
});

app.post('/todo', async (req, res) => {
  const { todo } = req.body;

  try {
    await todoService.request({
      todo,
    });
    res.send(201);
  } catch {
    res.status(400);
  }
});

module.exports = app;
