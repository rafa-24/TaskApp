const { Router } = require('express');
const { create, getAll, getById, edit, deleteTask, test } = require('../controllers/task.controllers')


// initialize routes
const router = Router();

router.post('/api/task/create', create);

router.get('/api/task/tasks', getAll);

router.get('/api/task/:id/getTask', getById);

router.put('/api/task/edit', edit);

router.delete('/api/task/delete', deleteTask);

module.exports = router;
