const { dataSource } = require("../data-source");


const taskRepository = dataSource.getRepository("Task")

module.exports = { taskRepository }