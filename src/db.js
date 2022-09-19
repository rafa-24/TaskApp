const { Pool } = require('pg');

// establecer conexion
const pool = new Pool({
      user: "siuu",
      password: "contraseña",
      host: "localhost",
      port: 5432,
      database: "nuevadb"
});