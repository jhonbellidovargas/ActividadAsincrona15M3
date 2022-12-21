const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`La suma de 2 + 2 es: ${2 + 2}`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});