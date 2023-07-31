const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      // The following are to prevent warnings in the console
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDb;
