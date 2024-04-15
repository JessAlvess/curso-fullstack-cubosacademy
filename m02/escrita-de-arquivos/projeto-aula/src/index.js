const express = require("express");
const fs = require("fs/promises");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  await fs.writeFile("./projeto-aula/src/b.txt", "Olá estudante, boa noite");
  res.json("ok");
});

app.post("/", async (req, res) => {
  const { nome, idade } = req.body;

  try {
    const teste = await fs.readFile("./projeto-aula/src/usuarios.json");

  const pessoas = JSON.parse(teste);

  pessoas.push({
    nome,
    idade,
  });

  const pessoasStringfy = JSON.stringify(pessoas);

  await fs.writeFile("./projeto-aula/src/usuarios.json", pessoasStringfy);

  return res.json(pessoas);
  } catch (error) {
  return res.json(`Deu erro: ${error.message}`);
    
  } finally {
    console.log('Isto sempre será executado');
  }
});

app.listen(3000);