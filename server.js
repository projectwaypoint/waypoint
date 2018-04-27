const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/build/index.html');
});

app.use(express.static('public'));

app.listen(3001, function () {
  console.log('Waypoint listening on port 3001!');
})