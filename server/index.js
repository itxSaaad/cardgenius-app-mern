const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');

const connectDb = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();

connectDb();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Is Runnig Perfectly!');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
