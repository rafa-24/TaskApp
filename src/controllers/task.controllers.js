const { taskRepository } = require("../repository/task.repository")



const create = async (req, res) => {
      const newTask = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
      }

      await taskRepository.save(newTask);

      return res.json({ message: 'tarea creada con exito', newTask });

}


const getAll = async (req, res) => {
      const allTask = await taskRepository.find()
      return res.json({ message: 'Estas son todas las tareas', allTask });
}


const getById = async (req, res) => {

      const { id } = req.params;
      Number(id);

      if (id) {
            const taskId = await taskRepository.findOneBy({
                  id: id
            });
            return res.status(200).json({ message: `Tarea encontrada con id ${id}`, taskId });
      } else {
            return res.status(400).send('id invalido');
      }
}


const edit = async (req, res) => {

      const { id } = req.params;
      Number(id);

      try {
            const taskId = await taskRepository.findOneBy({ id: id });

            if (!taskId) return res.status(404).json({ message: 'Esta tarea no existe' });

            await taskRepository.update({ id: id }, req.body);

            return res.status(200).json({ message: 'Tarea actualizada con exito' });
      }
      catch (err) {
            console.error(err);
      }

}


const deleteTask = async (req, res) => {
      const { id } = req.params;
      Number(id);

      if (id) {
            taskRepository.delete({ id: id });
            res.status(200).json({ message: `Has eliminado la tarea con id ${id}` });
      } else {
            res.status(404).json({ message: 'No se puedo eliminar tarea' });
      }

}



module.exports = {
      create,
      getAll,
      getById,
      edit,
      deleteTask
}