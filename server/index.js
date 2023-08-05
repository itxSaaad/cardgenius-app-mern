const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const cloudinary = require('cloudinary').v2;

const connectDb = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/formRoutes');

dotenv.config();

connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Is Runnig Perfectly!');
});

app.use('/api/users', userRoutes);
app.use('/api/forms', formRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
