const express = require('express');
const app = express();



app.get('/make/:nombre', (req, res) => {
  var nombre = req.params.nombre
  var nombreCapitalized = nombre.charAt(0).toUpperCase() + nombre.slice(1)
  res.send('<h1>Hola ' + nombreCapitalized +'!</h1>')
});

app.listen(3000, () => console.log('Listening on port 3000!'));