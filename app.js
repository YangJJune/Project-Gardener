const express = require('express');
const app = express();
const PORT = 3000;

function handleListening() {
  console.log(`Listening on http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send('hello');
}

app.get('/', handleHome);
app.listen(PORT, handleListening);
