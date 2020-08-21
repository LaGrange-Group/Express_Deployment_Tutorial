const parks = require('./data/parks.json');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/api/parks', (req, res) => {
  return res.send(parks);
});

app.listen(5000, function () {
  console.log('Server started on port 5000.');
});
