const ServerPort = 2000;
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');

connectDB();

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));


app.listen(ServerPort, () => console.log(`listening on port ${ServerPort}`));

module.exports = app;