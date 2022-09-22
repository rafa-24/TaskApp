// Create task example
const create = (req, res) => {
      const newTask = {
            id: req.body.id,
            title: req.body.title,
            message: req.body.message,
            status: false,
      }
      res.status(201).json({
            message: 'post creado',
            newTask
      });
}

// Obtener todas las tareas
const getAll = (req, res) => {
      res.json({ message: 'Retornar todas las tareas' });
}

// Obtener tarea por id
const getById = (req, res) => {
      const id = req.params;
      console.log(id);

}

// Editar
const edit = (req, res) => {
      // obtener el id
      const taskId = req.params;
      res.json({ message: `Editando esta tarea ${taskId}` });
}

// Eliminar
const deleteTask = (req, res) => {
      // obtener el id
      const taskId = req.params;
      res.json({ message: `Eliminando esta tarea ${taskId}` });
}


const test = (req, res) => {
      const taskId = res.send(req.params);
      console.log(taskId);
}

module.exports = {
      create,
      getAll,
      getById,
      edit,
      deleteTask,
      test
}