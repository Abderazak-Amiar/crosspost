const express = require('express');
const { join } = require('path');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.listen(3001, function (req, res) {
  console.log('Server started ⚡️ on port 3001');
});
app.route('/').get((req, res) => {
  res.send('Welcome to Server Store ⚡️');
});
