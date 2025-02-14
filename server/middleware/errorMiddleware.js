// Global error handler middleware
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);  // Log the error to the console

  // Send a generic error response to the client
  res.status(err.statusCode || 500).json({
    error: err.message || 'Something went wrong, please try again later.',
  });
};
