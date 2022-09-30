const { Router } = require('express');
const { create, getAll, getById, edit, deleteTask } = require('../controllers/task.controllers')


// initialize routes
const router = Router();

router.post('/api/v1/task/create', create);

/**
 * @openapi
 * /api/v1/task/tasks:
 *   get:
 *     taks:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: Obtener todas las tareas
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *       
 */

router.get('/api/v1/task/tasks', getAll);






router.get('/api/v1/task/:id/getTask', getById);





router.put('/api/v1/task/:id/edit', edit);




router.delete('/api/v1/task/:id/delete', deleteTask);

module.exports = router;
