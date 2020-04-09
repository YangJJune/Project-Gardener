const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.sendFile('public/login.html', { root: __dirname });
});

app.listen(port, () => console.log(`the app listening on port ${port}`));

// const express = require('express');
// const app = express();
// const PORT = 3000;

// function handleListening() {
//   console.log(`Listening on http://localhost:${PORT}`);
// }

// function handleHome(req, res) {
//   res.send('hello');
// }

// app.use(express.static('public'));
// app.get('/', handleHome);

// app.listen(PORT, handleListening);

// router.get('/test', function (req, res) {
//   res.sendFile(path.join(__dirname + '/login.html'));
// });

// app.use('/', router);
