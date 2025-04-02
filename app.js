const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/consulta/:cpf", async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const response = await axios.get(`https://consultaapioficial.pro/api/index.php?modulo=cpf&cpf=${cpf}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Erro ao consultar CPF",
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
