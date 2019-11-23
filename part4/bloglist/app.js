const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const blogsRouter = require('./controllers/blogs');

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(result => console.log('connected to the database'))
  .catch(error => console.log('error connecting to mongoDB: ', error.message));

app.use(cors());
app.use(bodyParser.json());

app.use('/api/blogs', blogsRouter);

module.exports = app;
