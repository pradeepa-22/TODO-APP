const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST new todo
router.post('/', async (req, res) => {
  const newTodo = await Todo.create(req.body);
  res.json(newTodo);
});

// PUT update todo
router.put('/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});

// DELETE todo
router.delete('/:id', async (req, res) => {
  const deleted = await Todo.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

module.exports = router;
