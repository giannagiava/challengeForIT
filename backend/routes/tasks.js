const express = require('express');
const router = express.Router();

let tasks = [];

// Obtener todas las tareas
router.get('/', (req, res) => {
  res.json(tasks);
});

// Crear nueva tarea
router.post('/', (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar tarea
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ message: 'No encontrada' });
  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});

// Eliminar tarea
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ message: 'No encontrada' });
  const deleted = tasks.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;