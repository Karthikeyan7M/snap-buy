const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // NOTE: checking for invalid ObjectId moved to it's own middleware
  // See README for further info.

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };

/*When a user requests a URL other than those handled by the `productRoutes`, the `notFound` middleware is invoked. 
 This middleware sets the response status to 404 and generates an error with the message "Not Found - ${req.originalUrl}".
 Afterward, it passes this error to the next middleware, which is the `errorHandler`. 
 The `errorHandler` middleware then handles this error, determining the appropriate status code based on the situation.
 If the error is a "CastError" indicating an invalid object ID, it sets the status code to 404.
 Finally, the `errorHandler` sends a JSON response containing the error message, stack trace (in development environment), and the determined status code.
 
 The sequence in which middleware is written is crucial for handling errors effectively.
 It's essential to place error-handling middleware after all other middleware functions. 
 This ensures that if none of the preceding middleware functions handle a request, 
the error-handling middleware can catch any unhandled errors.
*/
