const express = require("express");
const { Pool } = require("pg");

const app = express();

app.use(express.json());

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'conexao_node_pg'
});

app.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
// sempre passe o params como values na query para evitar sql injection
    const query = 'select * from empresas where id = $1 or id = $2'
    const params = [id, 2]

    const resultado = await pool.query(query, params)

    return res.json(resultado)
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000);
