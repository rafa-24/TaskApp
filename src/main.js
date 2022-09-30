const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const router = require('./routes/task.routes');
const { swaggerDocs: v1SwaggerDocs } = require('./routes/swagger');


// initilize express
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(router);

// init server
function main() {
      app.listen(config.port);
      console.log(`Server on running in port ${config.port}`);
      v1SwaggerDocs(app, config.port);
}

main();