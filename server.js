const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {title: 'My Note Title'},{body:'What a great note.'});
