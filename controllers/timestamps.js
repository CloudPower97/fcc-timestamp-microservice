exports.getTimestamp = (req, res) => {
  const { dateString } = req.params;

  const date = (() => {
    if (dateString) {
      if (dateString.includes('-')) {
        return new Date(dateString);
      } else {
        return new Date(+dateString);
      }
    } else {
      return new Date();
    }
  })();

  if (Date.parse(date)) {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  } else {
    res.json({
      error: 'Invalid Date'
    });
  }
};
