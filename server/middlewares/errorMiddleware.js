const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  // The error code is 404
  res.status(404);
  // Pass the error to the next middleware
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // Sometimes, the error code is 200, which means the request was successful
  // but the error is in the error object
  // So, we set the status code to 500 if it's 200

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  const response = {
    // The message property is the error message
    message: err.message,
  };

  if (process.env.NODE_ENV !== 'production') {
    // The stack property is the error stack trace
    response.stack = err.stack;
  }

  res.json(response);
};

module.exports = { notFound, errorHandler };
