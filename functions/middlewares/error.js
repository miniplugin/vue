/* eslint-disable semi */
module.exports = (err, req, res, next) => {
  if (err.message === 'access denied') {
    return res.status(403).end();
    // res.json({ error: err.message })
  }
  res.send(err.message);
  // next(err)
};
