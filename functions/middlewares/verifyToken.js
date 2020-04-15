/* eslint-disable semi */
module.exports = (req, res, next) => {
  console.log('here', req.headers);
  next();
};
