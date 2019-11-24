const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const blogsRouter = require('./controllers/blogs');

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => logger.info('connected to the database'))
  .catch(error => logger.error('error connecting to mongoDB: ', error.message));

app.use(cors());
app.use(bodyParser.json());
app.use(middleware.requestLogger);

app.use('/api/blogs', blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
