const { Router } = require('express');
const { create } = require('../controllers/task.controllers')


// initialize routes
const router = Router();

router.post('/api/task/create', create);

module.exports = router;
