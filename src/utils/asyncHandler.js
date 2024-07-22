const asyncHandler = (requestHandler) => {
  (err, req, res, next) => {
    Promise.resolve(requestHandler(err, req, res, next)).reject(
      (err = next(err))
    );
  };
};
export { asyncHandler };
// Both Cod are production Code
// Using Try Catch
// const asyncHandler = (requestHandler) => async (err, req, res, next) => {
//   try {
//     await requestHandler(err, res, req, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       sucess: false,
//       message: error.message,
//     });
//   }
// };
