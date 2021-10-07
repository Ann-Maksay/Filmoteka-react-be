const getWatchedList = async (req, res, next) => {
  const { watched } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      watched,
    },
  });
};

module.exports = getWatchedList;
