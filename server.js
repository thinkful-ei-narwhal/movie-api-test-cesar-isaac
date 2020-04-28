'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const movieData = require('./movie-data-small.json');
const helmet = require('helmet');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

console.log(process.env.API_TOKEN);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});