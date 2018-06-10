const express = require('express');
var path = require('path');
const app = express();
const port = 3000;
var mongodb = require('mongodb');
// const MONGODB_URL = 'mongodb://admin:Qwerty19@ds233500.mlab.com:33500/mongodatabase';
const MONGODB_URL = 'mongodb://admin:admin123@ds151840.mlab.com:51840/fullstacknosql';
var db;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/clientes', (req, res) => {
  if (db !== null) {
    const usuarios = db.findAll({});
    console.log('usuarios', usuarios);
  }

  res.send(pos);
});

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(
  MONGODB_URL,
  function(err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log('Database connection ready');
  }
);

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
