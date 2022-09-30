const typeorm = require("typeorm");

// conexion a mi base de datos Postgres
const dataSource = new typeorm.DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "siuu",
      password: "contraseña",
      database: "nuevadb",
      synchronize: true,
      entities: [require("./entitys/task.entity")],
});


// Inicializar base de datos
dataSource.initialize()
      .then(() => {
            console.log('Base de datos inicializada satisfactoriamente')
      })
      .catch((err) => {
            console.log('Hubo un error de tipo', err)
      });


module.exports = {
      dataSource
}