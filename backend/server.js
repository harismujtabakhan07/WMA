
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Initial To-Do data
let todos = [
  { id: 1, task: 'Learn Express.js', completed: false },
  { id: 2, task: 'Build a Full-Stack App', completed: false }
];

// GET: Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST: Add new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;

  if (!task || !task.trim()) {
    return res.status(400).json({ error: 'Task cannot be empty' });
  }

  const newTodo = {
    id: Date.now(),
    task: task.trim(),
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT: Update todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(item => item.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'To-Do not found' });
  }

  const { task, completed } = req.body;

  if (task !== undefined) {
    if (typeof task !== 'string' || !task.trim()) {
      return res.status(400).json({ error: 'Task cannot be empty' });
    }
    todo.task = task.trim();
  }

  if (completed !== undefined) {
    todo.completed = completed;
  }

  res.json(todo);
});

// DELETE: Delete todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const exists = todos.some(item => item.id === id);

  if (!exists) {
    return res.status(404).json({ error: 'To-Do not found' });
  }

  todos = todos.filter(item => item.id !== id);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
