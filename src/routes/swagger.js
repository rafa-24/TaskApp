const swaggerJsdoc = require("swagger-jsdoc");

const swaggerUi = require("swagger-ui-express");

// metadata e informacion de mi api

const options = {
      definition: {
            openapi: "3.0.0",
            info: { title: "Api task", version: "1.0.0" }
      },
      apis: ["src/routes/task.routes.js"]
}

// pasar objeto opciones 
const swaagerSpec = swaggerJsdoc(options);

// funcion para configurar nuestros documentos

const swaggerDocs = (app, port) => {
      app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaagerSpec));
      app.get('/api/v1/docs.json', (req, res) => {
            res.setHeader("content-type", "aplication/json");
            res.send(swaagerSpec);
      });
      console.log(
            `Version 1 docs are available at http://localhost:${port}/api/v1/docs`
      )
}

module.exports = { swaggerDocs };




















