// create task example
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

module.exports = {
      create
}